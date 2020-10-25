import React from 'react';
import './app-header.css';

const AppHeader = ({text}) => {
  return (
    <div className="app-header d-flex">
      <h1>{text}</h1>
    </div>
  );
};

export default AppHeader;
