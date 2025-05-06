// ClothingContext.js
import React, { createContext, useState } from 'react';

export const ClothingContext = createContext();

export const ClothingProvider = ({ children }) => {
  const [clothing, setClothing] = useState({
    top: '',
    bottom: '',
    jacket: '',
    dress: '',
    shoes: '',
    glasses: '',
    belt: '',
    necklace: '',
    hair: '',
    accessory: '',
  });

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectionOrder, setSelectionOrder] = useState([]);

  const handleWear = (image) => {
    setClothing((prev) => ({
      ...prev,
      [selectedCategory]: image,
    }));

    setSelectionOrder((prev) => {
      if (!prev.includes(selectedCategory)) {
        return [...prev, selectedCategory];
      }
      return prev;
    });
  };

  const handleRemove = (type) => {
    setClothing((prev) => ({
      ...prev,
      [type]: '',
    }));

    setSelectionOrder((prev) => prev.filter((cat) => cat !== type));
  };

  return (
    <ClothingContext.Provider
      value={{
        clothing,
        selectedCategory,
        setSelectedCategory,
        selectionOrder,
        handleWear,
        handleRemove,
      }}
    >
      {children}
    </ClothingContext.Provider>
  );
};
