import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiXMark, HiBars3 } from 'react-icons/hi2';
import '../styles/header.css'

export const NavigateApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-(--edu-darkest) text-(--edu-lightest) p-4 sticky top-0 z-50 shadow-md">
      <div className='container mx-auto flex justify-between items-center'>
        <NavLink to="/" className="text-xl sm:text-2xl font-bold tracking-tighter flex items-center gap-2 hover:opacity-90 transition-opacity">
          <span className="bg-(--edu-mid) px-2 py-1 rounded">Cognitia</span>Education
        </NavLink>
        
        <button 
          className="lg:hidden p-2 rounded-md hover:bg-(--edu-dark) transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="basic-navbar-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <HiXMark className="w-6 h-6" />
          ) : (
            <HiBars3 className="w-6 h-6" />
          )}
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:items-center absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto bg-(--edu-darkest) lg:bg-transparent shadow-lg lg:shadow-none z-50`}>
          <div className="flex flex-col lg:flex-row lg:space-x-6 xl:space-x-8 p-4 lg:p-0 font-medium">
            <a 
              href='/#hero' 
              className="px-3 py-2 rounded-md hover:text-(--edu-light) transition-colors text-sm lg:text-base"
              
            >
              Inicio
            </a>
            
            <a 
              href='/#disciplines' 
              className="px-3 py-2 rounded-md hover:text-(--edu-light) transition-colors text-sm lg:text-base"
              
            >
              Disciplinas
            </a>
            
            <NavLink 
              to='/nosotros' 
              className="px-3 py-2 rounded-md hover:text-(--edu-light) transition-colors text-sm lg:text-base"
              onClick={closeMenu}
            >
              Nosotros
            </NavLink>
            <NavLink 
              to='/contacto' 
              className="px-3 py-2 rounded-md hover:text-(--edu-light) transition-colors text-sm lg:text-base"
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </div>
        </div>

        <button className="hidden lg:block bg-(--edu-accent) hover:bg-(--edu-accent-light) text-white px-4 xl:px-6 py-2 rounded-full font-semibold transition-all cursor-pointer">
          Comenzar!
        </button>
      </div>
    </nav>
  )
}
