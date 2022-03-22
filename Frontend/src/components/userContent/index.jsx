import React from 'react';
import '../../style/pages/userPage.scss';

const UserContent = (props) => {
  const { children } = props;
  return <div className="userPage">{children}</div>;
};
export default React.memo(UserContent);
