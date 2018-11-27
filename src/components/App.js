import React from 'react';
import AppHeader from './AppHeader/AppHeader';
import Tabs from './Tabs/Tabs';
import tabsData from '../tabs.json';

const App = () => (
  <div>
    <AppHeader />
    <Tabs items={tabsData} />
  </div>
);

export default App;
