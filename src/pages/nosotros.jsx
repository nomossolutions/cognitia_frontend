import { MdAutoStories, MdDevices, MdRocketLaunch, MdFavorite, MdBook, MdEmojiObjects, MdVerified } from 'react-icons/md';
import '../styles/nosotros.css';

export const Nosotros = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Simple */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-pattern">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider uppercase rounded-full" 
                style={{backgroundColor: 'var(--edu-light)', color: 'var(--edu-darkest)'}}>
            Sobre Nosotros
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" 
              style={{color: 'var(--edu-darkest)'}}>
            De profes, <span style={{color: 'var(--edu-accent)'}}>para profes</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" 
             style={{color: 'var(--edu-dark)'}}>
            La historia detrás de la herramienta que está transformando la forma de preparar clases
          </p>
        </div>
      </section>

      {/* Historia con diseño alternado */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          
          {/* Bloque 1 - Izquierda a derecha */}
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" 
                   style={{backgroundColor: 'var(--edu-accent)'}}>
                <MdAutoStories className="text-3xl text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{color: 'var(--edu-darkest)'}}>
                Nació en el aula
              </h2>
              <div className="w-20 h-1 mb-6" style={{backgroundColor: 'var(--edu-accent)'}}></div>
              <p className="text-base sm:text-lg leading-relaxed" style={{color: 'var(--edu-dark)'}}>
                Cognitia Education nació en el aula. Literalmente. Soy docente, y como muchos colegas, sé lo que es correr contra el reloj, preparar clases, corregir, planificar… y todavía tener que armar ejercicios personalizados para cada grupo. Así que un día, entre pantallas y mates, surgió la idea: ¿y si la inteligencia artificial pudiera darnos una mano?
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{minHeight: '280px'}}>
                <img 
                  src="https://images.pexels.com/photos/9159067/pexels-photo-9159067.jpeg" 
                  alt="Educación en el aula"
                  className="w-full h-full object-cover"
                  style={{minHeight: '280px'}}
                />
              </div>
            </div>
          </div>

          {/* Bloque 2 - Derecha a izquierda */}
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="md:w-1/2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" 
                   style={{backgroundColor: 'var(--edu-mid)'}}>
                <MdDevices className="text-3xl text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{color: 'var(--edu-darkest)'}}>
                Por y para docentes
              </h2>
              <div className="w-20 h-1 mb-6" style={{backgroundColor: 'var(--edu-mid)'}}></div>
              <p className="text-base sm:text-lg leading-relaxed" style={{color: 'var(--edu-dark)'}}>
                Así nació este proyecto: una herramienta pensada por docentes, para docentes. Creamos ejercicios automáticos en Matemáticas, Programación y Lengua Española para Extranjeros, con el objetivo de ahorrar tiempo sin perder calidad. Porque sabemos que cada minuto cuenta, y que la educación necesita soluciones ágiles, creativas y humanas (aunque estén potenciadas por IÁ).
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{minHeight: '280px'}}>
                <img 
                  src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg" 
                  alt="Docentes colaborando"
                  className="w-full h-full object-cover"
                  style={{minHeight: '280px'}}
                />
              </div>
            </div>
          </div>

          {/* Bloque 3 - Izquierda a derecha */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" 
                   style={{backgroundColor: 'var(--edu-accent-light)'}}>
                <MdRocketLaunch className="text-3xl" style={{color: 'var(--edu-darkest)'}} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{color: 'var(--edu-darkest)'}}>
                El futuro es hoy
              </h2>
              <div className="w-20 h-1 mb-6" style={{backgroundColor: 'var(--edu-accent-light)'}}></div>
              <p className="text-base sm:text-lg leading-relaxed mb-4" style={{color: 'var(--edu-dark)'}}>
                Cognitia Education no reemplaza al docente. Lo acompaña, lo potencia, y le devuelve ese tiempo tan valioso que muchas veces se pierde en tareas repetitivas.
              </p>
              <p className="text-base sm:text-lg leading-relaxed font-semibold" style={{color: 'var(--edu-accent)'}}>
                Estamos recién empezando, pero con la convicción de que esto puede transformar la forma en que preparamos nuestras clases. Y si sos profe, ya sos parte de esta historia.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{minHeight: '280px'}}>
                <img 
                  src="https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg" 
                  alt="Innovación educativa"
                  className="w-full h-full object-cover"
                  style={{minHeight: '280px'}}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Valores en pills */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8" 
               style={{backgroundColor: 'var(--edu-dark)'}}>
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" 
              style={{color: 'var(--edu-lightest)'}}>
            Lo que nos mueve
          </h2>
          <p className="text-lg sm:text-xl mb-12" style={{color: 'var(--edu-light)'}}>
            Valores que guían cada línea de código
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="group flex items-center gap-3 px-6 py-4 rounded-full border-2 transition-all hover:scale-105" 
                 style={{borderColor: 'var(--edu-accent)', backgroundColor: 'rgba(231, 111, 81, 0.1)'}}>
              <MdFavorite className="text-2xl" style={{color: 'var(--edu-accent-light)'}} />
              <span className="font-bold text-lg" style={{color: 'var(--edu-lightest)'}}>
                Pasión
              </span>
            </div>
            
            <div className="group flex items-center gap-3 px-6 py-4 rounded-full border-2 transition-all hover:scale-105" 
                 style={{borderColor: 'var(--edu-light)', backgroundColor: 'rgba(163, 177, 138, 0.1)'}}>
              <MdBook className="text-2xl" style={{color: 'var(--edu-accent-light)'}} />
              <span className="font-bold text-lg" style={{color: 'var(--edu-lightest)'}}>
                Conocimiento
              </span>
            </div>
            
            <div className="group flex items-center gap-3 px-6 py-4 rounded-full border-2 transition-all hover:scale-105" 
                 style={{borderColor: 'var(--edu-accent-light)', backgroundColor: 'rgba(244, 162, 97, 0.1)'}}>
              <MdEmojiObjects className="text-2xl" style={{color: 'var(--edu-accent-light)'}} />
              <span className="font-bold text-lg" style={{color: 'var(--edu-lightest)'}}>
                Innovación
              </span>
            </div>
            
            <div className="group flex items-center gap-3 px-6 py-4 rounded-full border-2 transition-all hover:scale-105" 
                 style={{borderColor: 'var(--edu-light)', backgroundColor: 'rgba(218, 215, 205, 0.1)'}}>
              <MdVerified className="text-2xl" style={{color: 'var(--edu-accent-light)'}} />
              <span className="font-bold text-lg" style={{color: 'var(--edu-lightest)'}}>
                Calidad
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA minimalista */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-pattern">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" 
              style={{color: 'var(--edu-darkest)'}}>
            ¿Listo para unirte?
          </h2>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed" 
             style={{color: 'var(--edu-dark)'}}>
            Empezá a crear ejercicios increíbles en minutos
          </p>
          <a href='/' 
             className="inline-block px-8 py-4 rounded-xl font-bold text-lg text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl"
             style={{backgroundColor: 'var(--edu-accent)'}}>
            Comenzar ahora
          </a>
        </div>
      </section>
    </div>
  )
}
