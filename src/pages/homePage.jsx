import { NavLink } from 'react-router-dom';
import { MdSchool, MdFunctions, MdDescription, MdLanguage, MdCheckCircle, MdArrowForward } from 'react-icons/md';
import { HiCalculator, HiBolt, HiCodeBracket, HiLanguage, HiClock, HiUser, HiCheckCircle } from 'react-icons/hi2';
import '../styles/home.css'

export const HomePage = () => {
  return (
    <>
      {/* SECCIÓN PRINCIPAL */}
      <header id="hero" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
        backgroundImage: "linear-gradient(rgba(52, 78, 65, 0.6), rgba(52, 78, 65, 0.85)), url('https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        {/* Elementos de fondo abstractos para profundidad */}
        <div className="absolute top-0 right-0 w-1/3 h-full blur-[120px] rounded-full -mr-20 -mt-20" style={{backgroundColor: 'rgba(231, 111, 81, 0.05)'}}></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -ml-10 -mb-10"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20">
            
            {/* Columna de contenido izquierda */}
            <div className="lg:w-1/2 text-left w-full">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full border text-sm font-semibold tracking-wide" style={{
                backgroundColor: 'rgba(163, 177, 138, 0.2)',
                borderColor: 'rgba(231, 111, 81, 0.2)',
                color: 'var(--edu-lightest)'
              }}>
                <MdSchool className="text-base" />
                <span className="hidden sm:inline">Inteligencia Artificial para el Aula</span>
                <span className="sm:hidden">IA para el Aula</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-4 sm:mb-6 drop-shadow-sm">
                Potencia tu <span style={{color: 'var(--edu-accent-light)'}}>enseñanza</span> con IA
              </h1>

              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-xl opacity-90" style={{color: 'var(--edu-lightest)'}}>
                Genera ejercicios personalizados de matemáticas, física e idiomas en segundos. La herramienta que te devuelve el tiempo para lo que importa: tus alumnos.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href='#disciplines' className="bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1 text-center" style={{color: 'var(--edu-darkest)'}}>
                  Empezar ahora
                </a>
                <a href='#how-it-works' className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2">
                   ¿Cómo funciona?
                </a>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-sm font-medium" style={{color: 'rgba(218, 215, 205, 0.6)'}}>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2" style={{borderColor: 'var(--edu-dark)', backgroundColor: 'var(--edu-lightest)'}}></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2" style={{borderColor: 'var(--edu-dark)', backgroundColor: 'var(--edu-light)'}}></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2" style={{borderColor: 'var(--edu-dark)', backgroundColor: 'var(--edu-accent)'}}></div>
                </div>
                <span className="text-xs sm:text-sm">Uso recomendado para profesionales de la educación</span>
              </div>
            </div>

            {/* Columna visual derecha */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Tarjeta de vidrio principal (Mockup de UI) */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl relative z-20">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    <div className="h-3 sm:h-4 w-24 sm:w-32 bg-white/20 rounded ml-2"></div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex gap-3">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center shrink-0" style={{backgroundColor: 'rgba(231, 111, 81, 0.2)'}}>
                        <MdFunctions className="text-lg sm:text-xl" style={{color: 'var(--edu-accent-light)'}} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-3 sm:h-4 bg-white/20 rounded w-1/2 mb-2"></div>
                        <div className="h-2.5 sm:h-3 bg-white/10 rounded w-full"></div>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl">
                      <div className="flex justify-between items-center mb-3 sm:mb-4">
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{color: 'var(--edu-lightest)'}}>Prompt de IA</div>
                        <div className="text-[9px] sm:text-[10px]" style={{color: 'rgba(218, 215, 205, 0.5)'}}>Generando...</div>
                      </div>
                      <p className="text-xs sm:text-sm italic" style={{color: 'var(--edu-lightest)'}}>"Crea un examen de álgebra de 10 preguntas sobre ecuaciones de segundo grado para nivel universitario..."</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="h-16 sm:h-20 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-1" style={{backgroundColor: 'rgba(88, 129, 87, 0.3)'}}>
                        <MdDescription className="text-white text-xl sm:text-2xl" />
                        <span className="text-[9px] sm:text-[10px] text-white font-bold">PDF</span>
                      </div>
                      <div className="h-16 sm:h-20 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-1" style={{backgroundColor: 'rgba(231, 111, 81, 0.3)'}}>
                        <MdLanguage className="text-white text-xl sm:text-2xl" />
                        <span className="text-[9px] sm:text-[10px] text-white font-bold">Web</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elementos flotantes para profundidad */}
                <div className="absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full hidden sm:block" style={{backgroundColor: 'rgba(231, 111, 81, 0.2)'}}></div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 p-2.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-float z-30 flex items-center gap-2 sm:gap-3 animate-bounce">
                  <div className="bg-green-100 text-green-600 p-1.5 sm:p-2 rounded-full">
                    <MdCheckCircle className="text-sm sm:text-base" />
                  </div>
                  <span className="font-bold text-[10px] sm:text-xs" style={{color: 'var(--edu-darkest)'}}>¡Contenido listo!</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* DISCIPLINAS */}
      <section id="disciplines" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-pattern relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(218,215,205,0.2)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="flex justify-center items-center mb-2 gap-2">
              <span className="h-px w-6 sm:w-8 block self-center" style={{backgroundColor: 'var(--edu-light)'}}></span>
              <span className="text-xs font-bold tracking-widest uppercase" style={{color: 'var(--edu-mid)'}}>Explora</span>
              <span className="h-px w-6 sm:w-8 block self-center" style={{backgroundColor: 'var(--edu-light)'}}></span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--edu-darkest)'}}>
              Disciplinas Destacadas
            </h2>
            <div className="h-1 w-32 sm:w-40 md:w-60 mx-auto" style={{backgroundColor: 'var(--edu-mid)'}}></div>
          </div>

          {/* Sección de Ciencias */}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center" style={{color: 'var(--edu-darkest)'}}>
              <span className="inline-block border-b-4 pb-2" style={{borderColor: 'var(--edu-accent)'}}>Ciencias</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

              <NavLink to='/mathexercise' className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float group" style={{borderColor: 'rgba(218, 215, 205, 0.3)'}}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{backgroundColor: 'rgba(231, 111, 81, 0.1)'}}>
                  <HiCalculator className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{color: 'var(--edu-accent)'}} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{color: 'var(--edu-darkest)'}}>Matemáticas</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  Desde aritmética básica hasta cálculo avanzado con soluciones paso a paso.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{color: 'var(--edu-accent)'}}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" />
                </div>
              </NavLink>

              <NavLink to='/physicexercise' className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float group" style={{borderColor: 'rgba(218, 215, 205, 0.3)'}}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{backgroundColor: 'rgba(231, 111, 81, 0.1)'}}>
                  <HiBolt className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{color: 'var(--edu-accent)'}} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{color: 'var(--edu-darkest)'}}>Física</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  Problemas de cinemática, dinámica y electromagnetismo con variables ajustables.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{color: 'var(--edu-accent)'}}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" />
                </div>
              </NavLink>

              <NavLink to='/programmingexercise' className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float sm:col-span-2 lg:col-span-1 group" style={{borderColor: 'rgba(218, 215, 205, 0.3)'}}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{backgroundColor: 'rgba(231, 111, 81, 0.1)'}}>
                  <HiCodeBracket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{color: 'var(--edu-accent)'}} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{color: 'var(--edu-darkest)'}}>Programación</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  Desafíos de código en múltiples lenguajes con casos de prueba.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{color: 'var(--edu-accent)'}}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" />
                </div>
              </NavLink>

            </div>
          </div>

          {/* Sección de Idiomas */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center" style={{color: 'var(--edu-darkest)'}}>
              <span className="inline-block border-b-4 pb-2" style={{borderColor: 'var(--edu-accent)'}}>Idiomas</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">

              <NavLink to='/spanishexercise' className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float group" style={{borderColor: 'rgba(218, 215, 205, 0.3)'}}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{backgroundColor: 'rgba(231, 111, 81, 0.1)'}}>
                  <HiLanguage className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{color: 'var(--edu-accent)'}} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{color: 'var(--edu-darkest)'}}>Español</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  Comprensión lectora y ejercicios de gramática adaptados a diferentes niveles.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{color: 'var(--edu-accent)'}}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" />
                </div>
              </NavLink>

              <NavLink to='/italianexercise' className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float group" style={{borderColor: 'rgba(218, 215, 205, 0.3)'}}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{backgroundColor: 'rgba(231, 111, 81, 0.1)'}}>
                  <HiLanguage className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{color: 'var(--edu-accent)'}} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{color: 'var(--edu-darkest)'}}>Italiano</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  Ejercicios de vocabulario, gramática y comprensión auditiva.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{color: 'var(--edu-accent)'}}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" />
                </div>
              </NavLink>

            </div>
          </div>

        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
            
            <div className="lg:w-1/2 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6" style={{color: 'var(--edu-darkest)'}}>
                Crea material didáctico en un clic
              </h2>
              <p className="text-base sm:text-lg mb-6 md:mb-8" style={{color: 'var(--edu-dark)'}}>
                Nuestra interfaz intuitiva permite que cualquier docente, sin importar su experiencia técnica, pueda generar guías de estudio completas.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <span className="rounded-full w-6 h-6 flex items-center justify-center mt-0.5 sm:mt-1 shrink-0 font-bold text-sm" style={{backgroundColor: 'var(--edu-accent)', color: 'var(--edu-lightest)'}}>1</span>
                  <span className="text-white/90 px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base " style={{backgroundColor: 'var(--edu-accent)'}}>Selecciona la materia y el tema específico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="rounded-full w-6 h-6 flex items-center justify-center mt-0.5 sm:mt-1 shrink-0 font-bold text-sm" style={{backgroundColor: 'var(--edu-accent)', color: 'var(--edu-lightest)'}}>2</span>
                  <span className="text-white/90 px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base " style={{backgroundColor: 'var(--edu-accent)'}}>Define el nivel de dificultad y cantidad de ejercicios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="rounded-full w-6 h-6 flex items-center justify-center mt-0.5 sm:mt-1 shrink-0 font-bold text-sm" style={{backgroundColor: 'var(--edu-accent)', color: 'var(--edu-lightest)'}}>3</span>
                  <span className="text-white/90 px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base " style={{backgroundColor: 'var(--edu-accent)'}}>Exporta a PDF o Google Docs instantáneamente.</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border shadow-float max-w-md mx-auto lg:max-w-none" style={{borderColor: 'var(--edu-mid)'}}>
                <div className="p-3 flex gap-2" style={{backgroundColor: 'var(--edu-darkest)'}}>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-3 sm:h-4 rounded w-3/4" style={{backgroundColor: 'var(--edu-lightest)'}}></div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="h-9 sm:h-10 rounded border-2" style={{backgroundColor: 'var(--edu-lightest)', borderColor: 'var(--edu-light)'}}></div>
                      <div className="h-9 sm:h-10 rounded border-2" style={{backgroundColor: 'var(--edu-lightest)', borderColor: 'var(--edu-light)'}}></div>
                    </div>
                    <div className="h-20 sm:h-24 md:h-32 rounded border-2 border-dashed flex items-center justify-center" style={{backgroundColor: 'var(--edu-lightest)', borderColor: 'var(--edu-mid)'}}>
                      <span className="font-semibold text-xs sm:text-sm md:text-base px-2 text-center" style={{color: 'var(--edu-mid)'}}>Generando ejercicios...</span>
                    </div>
                    <div className="h-9 sm:h-10 rounded w-full" style={{backgroundColor: 'var(--edu-mid)'}}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-pattern">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center">
            
            <div className="flex flex-col items-center">
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-full shadow-soft-xl bg-white/50 backdrop-blur-sm border" style={{borderColor: 'rgba(231, 111, 81, 0.3)'}}>
                <HiClock className="w-8 h-8 md:w-10 md:h-10" style={{color: 'var(--edu-accent)'}} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{color: 'var(--edu-darkest)'}}>Ahorro de tiempo</h3>
              <p className="text-sm md:text-base opacity-80 px-2" style={{color: 'var(--edu-dark)'}}>Reduce horas de planificación y creación de material a solo unos minutos de edición final.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-full shadow-soft-xl bg-white/50 backdrop-blur-sm border" style={{borderColor: 'rgba(231, 111, 81, 0.3)'}}>
                <HiUser className="w-8 h-8 md:w-10 md:h-10" style={{color: 'var(--edu-accent)'}} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{color: 'var(--edu-darkest)'}}>Contenido personalizado</h3>
              <p className="text-sm md:text-base opacity-80 px-2" style={{color: 'var(--edu-dark)'}}>Crea versiones diferenciadas para cada estudiante según sus necesidades específicas de aprendizaje.</p>
            </div>

            <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-full shadow-soft-xl bg-white/50 backdrop-blur-sm border" style={{borderColor: 'rgba(231, 111, 81, 0.3)'}}>
                <HiCheckCircle className="w-8 h-8 md:w-10 md:h-10" style={{color: 'var(--edu-accent)'}} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{color: 'var(--edu-darkest)'}}>Fácil de usar</h3>
              <p className="text-sm md:text-base opacity-80 px-2" style={{color: 'var(--edu-dark)'}}>Interfaz amigable que no requiere conocimientos técnicos. Empieza a crear desde el primer día.</p>
            </div>

          </div>
        </div>
      </section>

      {/* LLAMADA A LA ACCIÓN */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl" style={{backgroundColor: 'var(--edu-darkest)', color: 'var(--edu-lightest)'}}>
            <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-10 rounded-full -mr-10 md:-mr-20 -mt-10 md:-mt-20" style={{backgroundColor: 'var(--edu-accent)'}}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 opacity-10 rounded-full -ml-5 md:-ml-10 -mb-5 md:-mb-10" style={{backgroundColor: 'var(--edu-accent-light)'}}></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                ¿Listo para transformar tus clases?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto opacity-90 px-2">
                Únete al selecto grupo de profesores que ya están revolucionando su aula con Inteligencia Artificial aplicada a sus clases!
              </p>
              <a href='#disciplines' className="inline-block bg-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl hover:shadow-float transform hover:-translate-y-1 transition-all shadow-xl" style={{color: 'var(--edu-darkest)'}}>
                Comenzar!
              </a>
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm opacity-75 italic px-2" style={{color: 'var(--edu-light)'}}>Recuerda usar la herramienta con responsabilidad </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
