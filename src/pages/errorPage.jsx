import { NavLink } from 'react-router-dom';
import { HiHome, HiArrowLeft } from 'react-icons/hi2';

export const ErrorPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-8">
        <span className="text-8xl font-black" style={{color: 'var(--edu-accent)'}}>404</span>
      </div>
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{color: 'var(--edu-darkest)'}}>
        Página no encontrada
      </h1>
      
      <p className="text-lg mb-8 max-w-md" style={{color: 'var(--edu-dark)'}}>
        Lo sentimos, la página que buscás no existe o fue movida a otro lugar.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <NavLink 
          to="/" 
          className="flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-xl font-bold text-white transition-all hover:scale-105 shadow-lg"
          style={{backgroundColor: 'var(--edu-accent)'}}
        >
          <HiHome className="w-5 h-5" />
          Volver al inicio
        </NavLink>
        
        <button 
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-xl font-bold border-2 transition-all hover:scale-105"
          style={{borderColor: 'var(--edu-mid)', color: 'var(--edu-mid)'}}
        >
          <HiArrowLeft className="w-5 h-5" />
          Volver atrás
        </button>
      </div>
    </div>
  );
};
