
  // 'use client';
  // import React, { createContext, useState, useEffect, useContext } from 'react';
  // import { AuthContext } from '@/context/AuthContext';

  // const CartWishlistContext = createContext();

  // export const CartWishlistProvider = ({ children }) => {
  //   const [wishlist, setWishlist] = useState([]);
  //   const [cart, setCart] = useState([]);
  //   const [savedForLater, setSavedForLater] = useState([]);
  //   const { currentUser } = useContext(AuthContext);

  //   useEffect(() => {
  //     if (currentUser) {
  //       const cartKey = `cart_${currentUser.id}`;
  //       const wishlistKey = `wishlist_${currentUser.id}`;
  //       const savedKey = `saved_${currentUser.id}`;
  //       const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
  //       const storedWishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];
  //       const storedSaved = JSON.parse(localStorage.getItem(savedKey)) || [];
  //       setCart(storedCart);
  //       setWishlist(storedWishlist);
  //       setSavedForLater(storedSaved);
  //     } else {
  //       setCart([]);
  //       setWishlist([]);
  //       setSavedForLater([]);
  //     }
  //   }, [currentUser]);

  //   const updateLocalStorage = (key, value) => {
  //     localStorage.setItem(key, JSON.stringify(value));
  //     window.dispatchEvent(new Event('storage'));
  //   };

  //   const addToWishlist = (product) => {
  //     if (!currentUser) {
  //       alert('Please log in to add to wishlist');
  //       return;
  //     }
  //     const wishlistKey = `wishlist_${currentUser.id}`;
  //     const updatedWishlist = [...wishlist, { ...product, quantity: 1 }];
  //     setWishlist(updatedWishlist);
  //     updateLocalStorage(wishlistKey, updatedWishlist);
  //   };

  //   const removeFromWishlist = (id) => {
  //     if (!currentUser) {
  //       alert('Please log in to remove from wishlist');
  //       return;
  //     }
  //     const wishlistKey = `wishlist_${currentUser.id}`;
  //     const updatedWishlist = wishlist.filter((item) => item.id !== id);
  //     setWishlist(updatedWishlist);
  //     updateLocalStorage(wishlistKey, updatedWishlist);
  //   };

  //   const updateWishlistQuantity = (id, newQuantity) => {
  //     if (!currentUser) {
  //       alert('Please log in to update wishlist quantity');
  //       return;
  //     }
  //     const wishlistKey = `wishlist_${currentUser.id}`;
  //     const updatedWishlist = wishlist.map((product) =>
  //       product.id === id ? { ...product, quantity: newQuantity } : product
  //     );
  //     setWishlist(updatedWishlist);
  //     updateLocalStorage(wishlistKey, updatedWishlist);
  //   };

  //   const addToCart = (product) => {
  //     if (!currentUser) {
  //       alert('Please log in to add to cart');
  //       return;
  //     }
  //     const cartKey = `cart_${currentUser.id}`;
  //     const existingProduct = cart.find((item) => item.id === product.id);
  //     let updatedCart;
  //     if (existingProduct) {
  //       updatedCart = cart.map((item) =>
  //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //       );
  //     } else {
  //       updatedCart = [...cart, { ...product, quantity: 1 }];
  //     }
  //     setCart(updatedCart);
  //     updateLocalStorage(cartKey, updatedCart);
  //   };

  //   const updateCartQuantity = (id, newQuantity) => {
  //     if (!currentUser) {
  //       alert('Please log in to update cart quantity');
  //       return;
  //     }
  //     const cartKey = `cart_${currentUser.id}`;
  //     const updatedCart = cart.map((product) =>
  //       product.id === id ? { ...product, quantity: newQuantity } : product
  //     );
  //     setCart(updatedCart);
  //     updateLocalStorage(cartKey, updatedCart);
  //   };

  //   const removeFromCart = (id) => {
  //     if (!currentUser) {
  //       alert('Please log in to remove from cart');
  //       return;
  //     }
  //     const cartKey = `cart_${currentUser.id}`;
  //     const updatedCart = cart.filter((item) => item.id !== id);
  //     setCart(updatedCart);
  //     updateLocalStorage(cartKey, updatedCart);
  //   };

  //   const saveForLater = (product) => {
  //     if (!currentUser) {
  //       alert('Please log in to save for later');
  //       return;
  //     }
  //     const savedKey = `saved_${currentUser.id}`;
  //     const cartKey = `cart_${currentUser.id}`;
  //     const updatedSaved = [...savedForLater, product];
  //     const updatedCart = cart.filter((item) => item.id !== product.id);
  //     setSavedForLater(updatedSaved);
  //     setCart(updatedCart);
  //     updateLocalStorage(savedKey, updatedSaved);
  //     updateLocalStorage(cartKey, updatedCart);
  //   };

  //   const isInWishlist = (id) => wishlist.some((item) => item.id === id);
  //   const isInCart = (id) => cart.some((item) => item.id === id);

  //   return (
  //     <CartWishlistContext.Provider
  //       value={{
  //         wishlist,
  //         cart,
  //         savedForLater,
  //         addToWishlist,
  //         removeFromWishlist,
  //         updateWishlistQuantity,
  //         addToCart,
  //         updateCartQuantity,
  //         removeFromCart,
  //         saveForLater,
  //         isInWishlist,
  //         isInCart,
  //       }}
  //     >
  //       {children}
  //     </CartWishlistContext.Provider>
  //   );
  // };

  // export const useCartWishlist = () => useContext(CartWishlistContext);


'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [savedForLater, setSavedForLater] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const getCartKey = () => currentUser ? `cart_${currentUser.id}` : 'cart_guest';

  useEffect(() => {
    if (currentUser) {
      const cartKey = `cart_${currentUser.id}`;
      const wishlistKey = `wishlist_${currentUser.id}`;
      const savedKey = `saved_${currentUser.id}`;
      const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
      const storedWishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];
      const storedSaved = JSON.parse(localStorage.getItem(savedKey)) || [];
      setCart(storedCart);
      setWishlist(storedWishlist);
      setSavedForLater(storedSaved);
    } else {
      const cartKey = getCartKey();
      const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
      setCart(storedCart);
      setWishlist([]);
      setSavedForLater([]);
    }
  }, [currentUser]);

  const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event('storage'));
  };

  const addToWishlist = (product) => {
    if (!currentUser) {
      alert('Please log in to add to wishlist');
      return;
    }
    const wishlistKey = `wishlist_${currentUser.id}`;
    const updatedWishlist = [...wishlist, { ...product, quantity: 1 }];
    setWishlist(updatedWishlist);
    updateLocalStorage(wishlistKey, updatedWishlist);
  };

  const removeFromWishlist = (id) => {
    if (!currentUser) {
      alert('Please log in to remove from wishlist');
      return;
    }
    const wishlistKey = `wishlist_${currentUser.id}`;
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    updateLocalStorage(wishlistKey, updatedWishlist);
  };

  const updateWishlistQuantity = (id, newQuantity) => {
    if (!currentUser) {
      alert('Please log in to update wishlist quantity');
      return;
    }
    const wishlistKey = `wishlist_${currentUser.id}`;
    const updatedWishlist = wishlist.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setWishlist(updatedWishlist);
    updateLocalStorage(wishlistKey, updatedWishlist);
  };

  const addToCart = (product) => {
    const cartKey = getCartKey();
    const existingProduct = cart.find((item) => item.id === product.id);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    updateLocalStorage(cartKey, updatedCart);
  };

  const updateCartQuantity = (id, newQuantity) => {
    if (!currentUser) {
      alert('Please log in to update cart quantity');
      return;
    }
    const cartKey = `cart_${currentUser.id}`;
    const updatedCart = cart.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
    updateLocalStorage(cartKey, updatedCart);
  };

  const removeFromCart = (id) => {
    if (!currentUser) {
      alert('Please log in to remove from cart');
      return;
    }
    const cartKey = `cart_${currentUser.id}`;
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    updateLocalStorage(cartKey, updatedCart);
  };

  const saveForLater = (product) => {
    if (!currentUser) {
      alert('Please log in to save for later');
      return;
    }
    const savedKey = `saved_${currentUser.id}`;
    const cartKey = `cart_${currentUser.id}`;
    const updatedSaved = [...savedForLater, product];
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setSavedForLater(updatedSaved);
    setCart(updatedCart);
    updateLocalStorage(savedKey, updatedSaved);
    updateLocalStorage(cartKey, updatedCart);
  };

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);
  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <CartWishlistContext.Provider
      value={{
        wishlist,
        cart,
        savedForLater,
        addToWishlist,
        removeFromWishlist,
        updateWishlistQuantity,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        saveForLater,
        isInWishlist,
        isInCart,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => useContext(CartWishlistContext);