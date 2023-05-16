
import React from 'react';
import { AppProvider } from '../context/SiteContext';

const RootElement = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default RootElement;