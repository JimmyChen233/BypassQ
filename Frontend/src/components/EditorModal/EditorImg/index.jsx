import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import { INPUT_ACCEPTANCE } from '../../../static/constants';
import addIcon from '../../../assets/add.svg';

const EditorImg = (props) => {
  const { imgUrl, setModalData, modalData } = props;
  const [img, setImg] = useState('');
  const [previewImg, setPreviewImg] = useState('');
  const imgUploaderRef = useRef();

  useEffect(() => {
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(img);
    }
    return;
  }, [img]);

  const imgHandler = (e) => {
    setImg(e.target.files[0]);
    setModalData({
      ...modalData,
      imgUrl: e.target.files[0],
    });
  };

  return (
    <section className="editor-img">
      {previewImg || imgUrl ? (
        <img
          src={previewImg || imgUrl}
          alt="img"
          className="editor-img__dishImg"
          onClick={() => imgUploaderRef?.current.click()}
        />
      ) : (
        <span className="editor-img__img-btn">
          <ReactSVG className="editor-img__img-btn-icon" src={addIcon} onClick={() => imgUploaderRef.current.click()} />
        </span>
      )}

      <input
        ref={imgUploaderRef}
        type="file"
        name="dishImg"
        accept={INPUT_ACCEPTANCE.IMAGE}
        onChange={imgHandler}
        className="editor-img__uploader"
        encType="multipart/form-data"
      />
    </section>
  );
};

EditorImg.propTypes = {
  imgUrl: PropTypes.string,
  setModalData: PropTypes.func.isRequired,
  modalData: PropTypes.object,
};
export default EditorImg;
