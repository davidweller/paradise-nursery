import React, { createContext, useContext, useState, useCallback } from 'react';
import { getPlantById } from './data/plants';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((plantId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.plantId === plantId);
      if (existingItem) {
        return prevItems.map(item =>
          item.plantId === plantId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { plantId, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((plantId) => {
    setCartItems(prevItems => prevItems.filter(item => item.plantId !== plantId));
  }, []);

  const updateQuantity = useCallback((plantId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(plantId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.plantId === plantId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, [removeFromCart]);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const getTotalCost = useCallback(() => {
    return cartItems.reduce((total, item) => {
      const plant = getPlantById(item.plantId);
      return total + (plant ? plant.price * item.quantity : 0);
    }, 0);
  }, [cartItems]);

  const getCartItemsWithDetails = useCallback(() => {
    return cartItems.map(item => {
      const plant = getPlantById(item.plantId);
      return {
        ...item,
        plant: plant || null
      };
    }).filter(item => item.plant !== null);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalCost,
    getCartItemsWithDetails
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

