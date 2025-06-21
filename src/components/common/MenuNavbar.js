
'use client';
import { useEffect, useState, useRef, useContext } from 'react';
import Image from 'next/image';
import NavBarSearchModal from './NavBarSearchModal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartWishlist } from '@/context/CartWishListProvider';
import { AuthContext } from '@/context/AuthContext';
import {
  Menu,
  X,
  User,
  Search,
  ShoppingCart,
  Heart,
  Settings,
  LogOut,
} from 'lucide-react';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faWhatsapp,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuNavbar() {
  const [scrollY, setScrollY] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { wishlist, cart } = useCartWishlist();
  const router = useRouter();
  const { currentUser, logout } = useContext(AuthContext);

  const toggleSearch = () => setIsSearchOpen((p) => !p);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onBannerClosed = () => setBannerVisible(false);
    window.addEventListener('alertClosed', onBannerClosed);
    return () => window.removeEventListener('alertClosed', onBannerClosed);
  }, []);

  const bannerHeight = bannerVisible ? 38 : 0;
  const navTop = Math.max(0, bannerHeight - scrollY);

  const navItems = [
    { name: 'Home', href: '/site' },
    { name: 'Shop', href: '/site/shop' },
    { name: 'All Laptops', href: '/site/shop?category=Laptops' },
    { name: 'Monitor', href: '/site/shop?category=Monitor' },
    { name: 'About Us', href: '/site/about-us' },
  ];

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const UserMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleUserClick = () => {
      if (!currentUser) {
        router.push('/auth/site-auth');
      } else {
        setIsDropdownOpen((prev) => !prev);
      }
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
      if (isDropdownOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDropdownOpen]);

    return (
      <div className="relative">
        <button onClick={handleUserClick} className="flex items-center">
          <User className="h-5 w-5 cursor-pointer hover:text-gray-400" />
        </button>
        {isDropdownOpen && currentUser && (
          <div
            ref={dropdownRef}
            className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10"
          >
            <div className="py-1">
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-black font-bold cursor-pointer mb-1"
                onClick={() => {
                  router.push('/site/my-account');
                  setIsDropdownOpen(false);
                }}
              >
                <Settings className="mr-2 h-4 w-4 text-black" />
                My Account
              </button>
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-black font-bold cursor-pointer"
                onClick={() => {
                  logout();
                  router.push('/auth/site-auth');
                  setIsDropdownOpen(false);
                }}
              >
                <LogOut className="mr-2 h-4 w-4 text-black" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <nav
        style={{ top: `${navTop}px` }}
        className={`fixed w-full h-20 lg:px-5 z-50 transition-all duration-300 ${
          scrollY >= bannerHeight ? 'bg-white shadow-md' : 'bg-hero'
        }`}
      >
        <div className="mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/site">
              <Image src="/images/logo/logo.png" width={60} height={60} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a key={item.name} href={item.href}>
                <span className="hover:text-primary transition-colors">{item.name}</span>
              </a>
            ))}
            <div className="flex space-x-4 ml-4 items-center">
              <button onClick={toggleSearch}>
                <Search className="h-5 w-5 cursor-pointer hover:text-gray-400" />
              </button>
              <UserMenu />
              <Link href="/site/wishlist" className="relative">
                <Heart className="h-5 w-5 cursor-pointer hover:text-gray-400" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-8px rounded-full px-1">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <button onClick={toggleCart} className="relative">
                <ShoppingCart className="h-5 w-5 cursor-pointer hover:text-gray-400" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-8px rounded-full px-1">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="flex space-x-4 items-center">
              <button className="block md:hidden text-2xl" onClick={toggleSearch}>
                <Search className="h-5 w-5 cursor-pointer hover:text-gray-400" />
              </button>
              <button onClick={toggleCart} className="relative">
                <ShoppingCart className="h-5 w-5 cursor-pointer hover:text-gray-400" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-8px rounded-full px-1">
                    {cart.length}
                  </span>
                )}
              </button>
              <UserMenu />
              <button
                className="md:hidden text-2xl"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isSearchOpen && <NavBarSearchModal onClose={toggleSearch} />}
      <div
        className={`fixed inset-y-0 right-0 w-full transform !bg-black/50 !backdrop-blur-sm z-50 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="h-full bg-white text-black p-6 overflow-auto shadow-xl flex flex-col justify-start">
          <div>
            <div className="flex justify-between items-center mb-8">
              <Image src="/images/logo/logo.png" width={60} height={60} alt="Logo" />
              <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
                <X />
              </button>
            </div>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <span className="text-btn uppercase">{item.name}</span>
                  </a>
                </div>
              ))}
            </nav>
            <div className="mt-12">
              <span className="text-sm font-semibold">Follow :</span>
              <div className="flex space-x-4 mt-2">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 cursor-pointer" />
                <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 cursor-pointer" />
                <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 cursor-pointer" />
                <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div>
              <a href="tel:+96474244763" className="text-btn">+964 742 44 763</a>
            </div>
            <a href="mailto:info@harry.com" className="text-sm text-gray-600">
              info@harry.com
            </a>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-opacity-70 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleCart}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-300 flex flex-col p-6 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold !text-black">SHOPPING CART</h2>
          <button onClick={toggleCart} className="text-lg">
            <X className="hover:text-primary" />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center items-center">
            <Image
              src="/images/MenuNavbar/notification-cart.png"
              width={60}
              height={60}
              alt="Empty Cart"
            />
            <p className="mt-4 text-gray-600">Your Cart is empty</p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                router.push('/site/shop');
              }}
              className="mt-6 btn-outline-primary"
            >
              Go To Shop
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="object-contain mr-4"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantity} x ₹{item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span>Subtotal:</span>
            <span className="text-primary font-semibold">₹{subtotal.toFixed(2)}</span>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              router.push('/site/add-to-cart');
            }}
            className="w-full py-2 mb-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            View Cart
          </button>
          <button
            onClick={() => {
              setIsCartOpen(false);
              router.push('/site/checkout');
            }}
            className="w-full py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded"
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}