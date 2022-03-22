import React from 'react';
import PropTypes from 'prop-types';

const TabList = (props) => {
  const { children, onChange } = props;

  const handleTab = (e) => {
    const value = e.target.getAttribute('value');
    onChange(value);
  };

  return (
    <div onClick={handleTab} className="tab-context__tab-section">
      {children}
    </div>
  );
};

TabList.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default TabList;
