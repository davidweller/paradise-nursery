import React, { createContext, useContext, useState, useCallback } from 'react';
import { getPlantById } from './data/plants';

const CartContext = createContext();

// Reducer functions for cart operations
export const addItem = (state, plantId) => {
  const existingItem = state.find(item => item.plantId === plantId);
  if (existingItem) {
    return state.map(item =>
      item.plantId === plantId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...state, { plantId, quantity: 1 }];
  }
};

export const removeItem = (state, plantId) => {
  return state.filter(item => item.plantId !== plantId);
};

export const updateQuantity = (state, plantId, newQuantity) => {
  if (newQuantity <= 0) {
    return removeItem(state, plantId);
  }
  return state.map(item =>
    item.plantId === plantId
      ? { ...item, quantity: newQuantity }
      : item
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Using the reducer functions
  const addToCart = useCallback((plantId) => {
    setCartItems(prevItems => addItem(prevItems, plantId));
  }, []);

  const removeFromCart = useCallback((plantId) => {
    setCartItems(prevItems => removeItem(prevItems, plantId));
  }, []);

  const updateQuantityHandler = useCallback((plantId, newQuantity) => {
    setCartItems(prevItems => updateQuantity(prevItems, plantId, newQuantity));
  }, []);

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
    updateQuantity: updateQuantityHandler,
    getTotalItems,
    getTotalCost,
    getCartItemsWithDetails,
    // Expose reducer functions directly
    addItem: (plantId) => setCartItems(prevItems => addItem(prevItems, plantId)),
    removeItem: (plantId) => setCartItems(prevItems => removeItem(prevItems, plantId)),
    updateQuantityReducer: (plantId, newQuantity) => setCartItems(prevItems => updateQuantity(prevItems, plantId, newQuantity))
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

