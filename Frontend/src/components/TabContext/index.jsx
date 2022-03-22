import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabPanel from './TabPanel';
import TabList from './TabList';
import Tab from './Tabs';
import '../../style/components/tabContext.scss';

const TabContext = (props) => {
  const { panelData } = props;
  const [value, setValue] = useState(0);

  const handleIndex = (index) => {
    setValue(Number(index));
  };

  return (
    <div className="tab-context">
      <TabList onChange={handleIndex}>
        {panelData.map((item) => (
          <Tab {...item} key={item.categories} value={value} />
        ))}
      </TabList>
      {panelData.map((item) => (
        <TabPanel {...item} key={item.categories} value={value}>
          {item.children}
        </TabPanel>
      ))}
    </div>
  );
};

TabContext.propTypes = {
  panelData: PropTypes.array.isRequired,
};

export default TabContext;
