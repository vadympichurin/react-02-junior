import React from 'react';

import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import ColorPicker from './components/colorPicker/ColorPicker';
import Notification from './components/notification/Notification';
import Layout from './components/layout/Layout';
import Counter from './components/counter/Counter';
import Dropdown from './components/dropdown/Dropdown';

import paintings from './paintings.json';

const colors = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
];

const App = () => {
  return (
    <>
      <ColorPicker colors={colors} />
      {/* <Dropdown /> */}
      {/* <Counter initialValue={10} /> */}
    </>
  );
};

export default App;
