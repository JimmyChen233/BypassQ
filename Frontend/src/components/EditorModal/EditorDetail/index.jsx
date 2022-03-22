import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import OptionTab from '../../Options/index.jsx';

const EditorDetail = (props) => {
  const { options, modalData, setModalData, submit } = props;
  const { price, categories, name } = modalData;

  const dishDetailHandler = (type) => {
    return (value) => {
      setModalData({
        ...modalData,
        [type]: value,
      });
    };
  };

  return (
    <section className="editor-detail">
      <Input
        className="editor-detail__input editor-detail__input--price"
        placeholder="Price"
        type="text"
        value={price || ''}
        onChange={dishDetailHandler('price')}
      />
      <OptionTab
        className="editor-detail__input editor-detail__input--option"
        options={options}
        dishCategory={categories}
        setModalData={setModalData}
        modalData={modalData}
      />
      <Input
        className="editor-detail__input editor-detail__input--name"
        placeholder="Name"
        type="text"
        value={name || ''}
        onChange={dishDetailHandler('name')}
      />
      <button className="editor-detail__button editor-detail__button--cancel">Cancel</button>
      <button className="editor-detail__button editor-detail__button--confirm" onClick={submit}>
        Confirm
      </button>
    </section>
  );
};

EditorDetail.propTypes = {
  options: PropTypes.array.isRequired,
  modalData: PropTypes.object.isRequired,
  setModalData: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
export default EditorDetail;
