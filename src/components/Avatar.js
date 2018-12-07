import React from 'react';

const Avatar = ({ image = '', width = 60, height = 60 }) => (
  <img
    className="Avatar"
    src={image}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
