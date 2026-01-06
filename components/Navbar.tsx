
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MOCK_USER } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-md px-4 py-3 dark:border-stone-800 dark:bg-background-dark/90 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30 group-hover:bg-primary-dark transition-colors">
            <span className="material-symbols-outlined">bakery_dining</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-text-main dark:text-white lg:text-xl">
            Roti Bakar <span className="text-primary">Galuh Binangkit</span>
          </h2>
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : 'text-text-main dark:text-stone-300'}`}
          >
            Beranda
          </Link>
          <Link 
            to="/cart" 
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/cart') ? 'text-primary' : 'text-text-main dark:text-stone-300'}`}
          >
            Menu
          </Link>
          <Link 
            to="/profile" 
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/profile') ? 'text-primary' : 'text-text-main dark:text-stone-300'}`}
          >
            Profil
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            to="/cart"
            className="group relative flex h-10 items-center gap-2 rounded-full bg-stone-100 px-4 py-2 transition-all hover:bg-primary hover:text-white dark:bg-stone-800 dark:text-white dark:hover:bg-primary"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            <span className="text-sm font-bold">2</span>
          </Link>
          
          <Link to="/profile" className="hidden items-center gap-2 md:flex">
            <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-primary/20">
              <img src={MOCK_USER.avatar} alt="User" className="h-full w-full object-cover" />
            </div>
            <span className="text-sm font-semibold">{MOCK_USER.name}</span>
          </Link>

          <button className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
