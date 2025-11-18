import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Завантажити список бажань з localStorage при старті
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Зберігати список бажань в localStorage при зміні
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev;
      }
      return [...prev, productId];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
