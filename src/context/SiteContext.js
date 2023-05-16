import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sectionInView, setIsSectionViewable] = useState();

  const handleSectionInView = (section) => {
    setIsSectionViewable(section);
  };

  return (
    <AppContext.Provider
      value={{
        sectionInView,
        handleSectionInView
      }}
    >
      {children}
    </AppContext.Provider>
  );
};