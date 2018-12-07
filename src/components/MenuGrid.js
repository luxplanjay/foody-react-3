import React from 'react';
import MenuCard from './MenuCard';

const MenuGrid = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <MenuCard {...item} />
      </li>
    ))}
  </ul>
);

export default MenuGrid;
