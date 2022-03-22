import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tab = (props) => {
  const { categories, index, value } = props;

  const isCurrent = index === Number(value);

  const tabClasses = classNames({
    'tab-context__tab': true,
    'tab-context__tab--actived': isCurrent,
  });

  return (
    <div className={tabClasses} value={index}>
      {categories}
    </div>
  );
};

Tab.prototype = {
  categories: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Tab;
