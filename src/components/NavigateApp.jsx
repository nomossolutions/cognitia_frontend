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
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <nav className="bg-(--edu-darkest) text-(--edu-lightest) p-4 sticky top-0 z-50 shadow-md" aria-label="Navegación principal">
        <div className='container mx-auto flex justify-between items-center'>
          <NavLink to="/" className="text-xl sm:text-2xl font-bold tracking-tighter flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="bg-(--edu-mid) px-2 py-1 rounded">Cognitia</span>Education
          </NavLink>
          
          <button 
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] rounded-md hover:bg-(--edu-dark) transition-colors flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="basic-navbar-nav"
            aria-expanded={isOpen}
            aria-label="Abrir menú de navegación"
          >
            {isOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </button>

          <div id="basic-navbar-nav" className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:items-center absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto bg-(--edu-darkest) lg:bg-transparent shadow-lg lg:shadow-none z-50`}>
            <div className="flex flex-col lg:flex-row lg:space-x-6 xl:space-x-8 p-4 lg:p-0 font-medium">
              <NavLink 
                to='/' 
                className="px-3 py-2 min-h-[44px] flex items-center rounded-md hover:text-(--edu-light) transition-colors text-sm lg:text-base focus-visible:ring-2 focus-visible:ring-(--edu-accent) focus-visible:outline-none"
                end
              >
                Inicio
              </NavLink>
              
              <a 
                href='/#disciplines' 
                className="px-3 py-2 min-h-[44px] flex items-center rounded-md hover:text-(--edu-light) transition-colors text-sm lg:text-base focus-visible:ring-2 focus-visible:ring-(--edu-accent) focus-visible:outline-none"
                onClick={closeMenu}
              >
                Disciplinas
              </a>
              
              <NavLink 
                to='/nosotros' 
                className="px-3 py-2 min-h-[44px] flex items-center rounded-md hover:text-(--edu-light) transition-colors text-sm lg:text-base focus-visible:ring-2 focus-visible:ring-(--edu-accent) focus-visible:outline-none"
                onClick={closeMenu}
              >
                Nosotros
              </NavLink>
              <NavLink 
                to='/contacto' 
                className="px-3 py-2 min-h-[44px] flex items-center rounded-md hover:text-(--edu-light) transition-colors text-sm lg:text-base focus-visible:ring-2 focus-visible:ring-(--edu-accent) focus-visible:outline-none"
                onClick={closeMenu}
              >
                Contacto
              </NavLink>
            </div>
          </div>

          <a href="/#disciplines" className="hidden lg:flex bg-(--edu-accent) hover:bg-(--edu-accent-light) text-white px-4 xl:px-6 py-2 min-h-[44px] items-center rounded-full font-semibold transition-all cursor-pointer">
            Comenzar!
          </a>
        </div>
      </nav>
    </>
  )
}
