import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
  const { children, value, index } = props;

  const isCurrentPage = index === Number(value);
  return <div className="tab-context__content">{isCurrentPage && children}</div>;
};

TabPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default TabPanel;
