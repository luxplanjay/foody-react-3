import React from 'react';
import MenuCard from './MenuCard';

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <MenuCard
          name={item.name}
          price={item.price}
          image={item.image}
          onShowMoreInfo={() => onShowMoreInfo(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      </li>
    ))}
  </ul>
);

export default MenuGrid;
