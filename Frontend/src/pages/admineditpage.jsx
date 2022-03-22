import React, { useState } from 'react';
import moment from 'moment';
import NavLayout from '../components/NavLayout';
import TabContext from '../components/TabContext';
import EditorWrapper from '../components/AdminEditPage/EditorWrapper';
import EditorModal from '../components/EditorModal/editorModal.jsx';
import EditCategoriesModal from '../components/AdminEditPage/EditCategoriesModal';
import AdminEditHeader from '../components/AdminEditPage/AdminEditHeader';
import EmptyCategory from '../components/AdminEditPage/EmptyCategory';
import { useDishList } from '../hooks';
import { addDishHttp, updateDishHttp, deleteDishHttp, deleteCategoryHttp, addCategoryHttp } from '../http/dishHttp';
import { ROLE } from '../static/constants';
import '../style/pages/adminEditPage.scss';

const AdminEditPage = () => {
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
  const [dishModalData, setDishModalData] = useState({});
  const { dishList, dishCategories, setDishList } = useDishList();

  const today = moment(new Date()).format('dddd, D MMMM, YYYY');

  const editDishModalHandler = (data) => {
    setDishModalData({ ...data });
    setIsDishModalOpen(!isDishModalOpen);
  };

  const editCategoriesModalHandler = () => {
    setIsCategoriesModalOpen(!isCategoriesModalOpen);
  };

  const deleteDish = async (id) => {
    const { data } = await deleteDishHttp(id);
    setDishList(data);
  };

  const deleteCategory = async (category) => {
    const { data } = await deleteCategoryHttp(category);
    setDishList(data);
  };

  const addCategory = async (category) => {
    try {
      const { data } = await addCategoryHttp({ category });
      setDishList(data);
    } catch (e) {
      //TODO 后续添加提示框，根据返回的错误告诉用户哪里出问题，console暂时不删除
    }
  };

  const modifyDish = async () => {
    const { imgUrl, categories, name, price, type, _id } = dishModalData;
    const formData = new FormData();
    let dishData = [];

    formData.append('dishImg', imgUrl);
    formData.append('categories', categories);
    formData.append('name', name);
    formData.append('price', Number(price));
    formData.append('_id', _id);

    try {
      if (type === 'newItem') {
        const { data } = await addDishHttp(formData);
        dishData = data;
      } else {
        const { data } = await updateDishHttp(formData);
        dishData = data;
      }
    } catch (e) {
      //TODO 后续添加提示框，根据返回的错误告诉用户哪里出问题，console暂时不删除

      return;
    }

    setDishList(dishData);
    setIsDishModalOpen(!isDishModalOpen);
  };

  const panelContent = dishList.map((list, index) => ({
    index,
    categories: list.categories,
    children: (
      <EditorWrapper
        dishData={list.dishes}
        modalHandler={editDishModalHandler}
        categories={list.categories}
        deleteItem={deleteDish}
      />
    ),
  }));

  return (
    <NavLayout role={ROLE.ADMIN}>
      <section className="edit-page">
        <header className="edit-page__title">
          <span>Menu Management</span>
          <span>{today}</span>
        </header>
        <div className="edit-page__content">
          <AdminEditHeader editCategoriesModalHandler={editCategoriesModalHandler} />
          {dishList.length ? (
            <TabContext panelData={panelContent} />
          ) : (
            <EmptyCategory editCategoriesModalHandler={editCategoriesModalHandler} />
          )}
        </div>
      </section>

      <EditorModal
        className="editor-modal"
        isOpen={isDishModalOpen}
        closeHandle={editDishModalHandler}
        modalData={dishModalData}
        categoriesList={dishCategories}
        setModalData={setDishModalData}
        setDishList={setDishList}
        dishListHandler={modifyDish}
      />

      <EditCategoriesModal
        className="editor-categories"
        isOpen={isCategoriesModalOpen}
        closeHandle={editCategoriesModalHandler}
        categoriesList={dishCategories}
        deleteCategory={deleteCategory}
        addCategory={addCategory}
      />
    </NavLayout>
  );
};

export default AdminEditPage;
