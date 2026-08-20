import { NavLink } from 'react-router-dom';
import { MdSchool, MdFunctions, MdDescription, MdLanguage, MdCheckCircle, MdArrowForward } from 'react-icons/md';
import { HiCalculator, HiBolt, HiCodeBracket, HiLanguage, HiClock, HiUser, HiCheckCircle } from 'react-icons/hi2';
import heroImg from '../assets/heroimg.jpg'
import '../styles/home.css'

export const HomePage = () => {
  return (
    <>
      {/* SECCIÓN PRINCIPAL */}
      <header id="hero" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
        backgroundImage: `linear-gradient(var(--edu-hero-overlay), var(--edu-hero-overlay-heavy)), url('${heroImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute top-0 right-0 w-1/3 h-full blur-[80px] rounded-full -mr-20 -mt-20" style={{ backgroundColor: 'var(--edu-glow-accent-subtle)' }}></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[60px] rounded-full -ml-10 -mb-10"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20">

            <div className="lg:w-1/2 text-left w-full">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full border text-sm font-semibold tracking-wide" style={{
                backgroundColor: 'var(--edu-badge-bg)',
                borderColor: 'var(--edu-badge-border)',
                color: 'var(--edu-lightest)'
              }}>
                <MdSchool className="text-base" aria-hidden="true" />
                <span className="hidden sm:inline">Inteligencia Artificial para el Aula</span>
                <span className="sm:hidden">IA para el Aula</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-4 sm:mb-6 drop-shadow-sm">
                Potencia tu <span style={{ color: 'var(--edu-accent-light)' }}>enseñanza</span> con IA
              </h1>

              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-xl" style={{ color: 'var(--edu-lightest)' }}>
                Genera ejercicios personalizados de matemáticas, física e idiomas en segundos. La herramienta que te devuelve el tiempo para lo que importa: tus alumnos.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#disciplines" aria-label="Empezar ahora: ver disciplinas disponibles" className="bg-white px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] rounded-xl font-bold text-base sm:text-lg hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1 text-center flex items-center justify-center focus-ring" style={{ color: 'var(--edu-darkest)' }}>
                  Empezar ahora
                </a>
                <a href="#how-it-works" aria-label="Descubre cómo funciona la plataforma" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] rounded-xl font-bold text-base sm:text-lg hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2 focus-ring">
                  ¿Cómo funciona?
                </a>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-sm font-medium" style={{ color: 'var(--edu-lightest)' }} aria-label="Diseñado para profesionales de la educación">
                <div className="flex -space-x-2" aria-hidden="true">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2" style={{ borderColor: 'var(--edu-darkest)', backgroundColor: 'var(--edu-lightest)' }}></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2" style={{ borderColor: 'var(--edu-darkest)', backgroundColor: 'var(--edu-light)' }}></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2" style={{ borderColor: 'var(--edu-darkest)', backgroundColor: 'var(--edu-accent)' }}></div>
                </div>
                <span className="text-xs sm:text-sm">Diseñado para profesionales de la educación</span>
              </div>
            </div>

            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl relative z-20">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    <div className="h-3 sm:h-4 w-24 sm:w-32 bg-white/20 rounded ml-2"></div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex gap-3">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--edu-glow-accent-soft)' }}>
                        <MdFunctions className="text-lg sm:text-xl" style={{ color: 'var(--edu-accent-light)' }} aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-3 sm:h-4 bg-white/20 rounded w-1/2 mb-2"></div>
                        <div className="h-2.5 sm:h-3 bg-white/10 rounded w-full"></div>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl">
                      <div className="flex justify-between items-center mb-3 sm:mb-4">
                        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--edu-lightest)' }}>Prompt de IA</div>
                        <div className="text-[9px] sm:text-[10px]" style={{ color: 'var(--edu-lightest)' }}>Generando...</div>
                      </div>
                      <p className="text-xs sm:text-sm italic" style={{ color: 'var(--edu-lightest)' }}>"Crea un examen de álgebra de 10 preguntas sobre ecuaciones de segundo grado para nivel universitario..."</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="h-16 sm:h-20 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-1" style={{ backgroundColor: 'color-mix(in srgb, var(--edu-mid) 30%, transparent)' }}>
                        <MdDescription className="text-white text-xl sm:text-2xl" aria-hidden="true" />
                        <span className="text-[9px] sm:text-[10px] text-white font-bold">PDF</span>
                      </div>
                      <div className="h-16 sm:h-20 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-1" style={{ backgroundColor: 'var(--edu-glow-accent-soft)' }}>
                        <MdLanguage className="text-white text-xl sm:text-2xl" aria-hidden="true" />
                        <span className="text-[9px] sm:text-[10px] text-white font-bold">Web</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full hidden sm:block" style={{ backgroundColor: 'var(--edu-glow-accent-soft)' }}></div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 p-2.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-float z-30 flex items-center gap-2 sm:gap-3 animate-bounce">
                  <div className="bg-green-100 text-green-600 p-1.5 sm:p-2 rounded-full">
                    <MdCheckCircle className="text-sm sm:text-base" aria-hidden="true" />
                  </div>
                  <span className="font-bold text-[10px] sm:text-xs" style={{ color: 'var(--edu-darkest)' }}>¡Contenido listo!</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* DISCIPLINAS */}
      <section id="disciplines" aria-labelledby="disciplines-heading" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-pattern relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(218,215,205,0.2)_0%,transparent_50%)] pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 id="disciplines-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--edu-darkest)' }}>
              Disciplinas Destacadas
            </h2>
            <div className="h-1 w-32 sm:w-40 md:w-60 mx-auto" style={{ backgroundColor: 'var(--edu-mid)' }}></div>
          </div>

          <div className="mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center" style={{ color: 'var(--edu-darkest)' }}>
              <span className="inline-block border-b-4 pb-2" style={{ borderColor: 'var(--edu-accent)' }}>Ciencias</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

              <NavLink to="/mathexercise" aria-label="Acceder a ejercicios de Matemáticas" className="focus-ring bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float group" style={{ borderColor: 'var(--edu-card-border)' }}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{ backgroundColor: 'var(--edu-glow-accent-soft)' }}>
                  <HiCalculator className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: 'var(--edu-accent)' }} aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: 'var(--edu-darkest)' }}>Matemáticas</h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--edu-dark)' }}>
                  Desde aritmética básica hasta cálculo avanzado con soluciones paso a paso.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: 'var(--edu-accent)' }}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" aria-hidden="true" />
                </div>
              </NavLink>

              <NavLink to="/physicexercise" aria-label="Acceder a ejercicios de Física" className="focus-ring bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float group" style={{ borderColor: 'var(--edu-card-border)' }}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{ backgroundColor: 'var(--edu-glow-accent-soft)' }}>
                  <HiBolt className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: 'var(--edu-accent)' }} aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: 'var(--edu-darkest)' }}>Física</h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--edu-dark)' }}>
                  Problemas de cinemática, dinámica y electromagnetismo con variables ajustables.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: 'var(--edu-accent)' }}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" aria-hidden="true" />
                </div>
              </NavLink>

              <NavLink to="/programmingexercise" aria-label="Acceder a ejercicios de Programación" className="focus-ring bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float sm:col-span-2 lg:col-span-1 group" style={{ borderColor: 'var(--edu-card-border)' }}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{ backgroundColor: 'var(--edu-glow-accent-soft)' }}>
                  <HiCodeBracket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: 'var(--edu-accent)' }} aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: 'var(--edu-darkest)' }}>Programación</h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--edu-dark)' }}>
                  Desafíos de código en múltiples lenguajes con casos de prueba.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: 'var(--edu-accent)' }}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" aria-hidden="true" />
                </div>
              </NavLink>

            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center" style={{ color: 'var(--edu-darkest)' }}>
              <span className="inline-block border-b-4 pb-2" style={{ borderColor: 'var(--edu-accent)' }}>Idiomas</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">

              <NavLink to="/spanishexercise" aria-label="Acceder a ejercicios de Español" className="focus-ring bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float group" style={{ borderColor: 'var(--edu-card-border)' }}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{ backgroundColor: 'var(--edu-glow-accent-soft)' }}>
                  <HiLanguage className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: 'var(--edu-accent)' }} aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: 'var(--edu-darkest)' }}>Español</h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--edu-dark)' }}>
                  Comprensión lectora y ejercicios de gramática adaptados a diferentes niveles.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: 'var(--edu-accent)' }}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" aria-hidden="true" />
                </div>
              </NavLink>

              <NavLink to="/italianexercise" aria-label="Acceder a ejercicios de Italiano" className="focus-ring bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl border card-transition shadow-soft-xl hover:shadow-float group" style={{ borderColor: 'var(--edu-card-border)' }}>
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6" style={{ backgroundColor: 'var(--edu-glow-accent-soft)' }}>
                  <HiLanguage className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: 'var(--edu-accent)' }} aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: 'var(--edu-darkest)' }}>Italiano</h3>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--edu-dark)' }}>
                  Ejercicios de vocabulario, gramática y comprensión auditiva.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: 'var(--edu-accent)' }}>
                  <span>Acceder</span>
                  <MdArrowForward className="text-lg" aria-hidden="true" />
                </div>
              </NavLink>

            </div>
          </div>

        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">

            <div className="lg:w-1/2 w-full">
              <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: 'var(--edu-darkest)' }}>
                Crea material didáctico en un clic
              </h2>
              <p className="text-base sm:text-lg mb-6 md:mb-8" style={{ color: 'var(--edu-dark)' }}>
                Nuestra interfaz intuitiva permite que cualquier docente, sin importar su experiencia técnica, pueda generar guías de estudio completas.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <span className="rounded-full w-6 h-6 flex items-center justify-center mt-0.5 sm:mt-1 shrink-0 font-bold text-sm" style={{ backgroundColor: 'var(--edu-accent)', color: 'var(--edu-soft-white)' }} aria-hidden="true">1</span>
                  <span className="px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base" style={{ backgroundColor: 'var(--edu-accent)', color: 'var(--edu-soft-white)' }}>Selecciona la materia y el tema específico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="rounded-full w-6 h-6 flex items-center justify-center mt-0.5 sm:mt-1 shrink-0 font-bold text-sm" style={{ backgroundColor: 'var(--edu-accent)', color: 'var(--edu-soft-white)' }} aria-hidden="true">2</span>
                  <span className="px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base" style={{ backgroundColor: 'var(--edu-accent)', color: 'var(--edu-soft-white)' }}>Define el nivel de dificultad y cantidad de ejercicios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="rounded-full w-6 h-6 flex items-center justify-center mt-0.5 sm:mt-1 shrink-0 font-bold text-sm" style={{ backgroundColor: 'var(--edu-accent)', color: 'var(--edu-soft-white)' }} aria-hidden="true">3</span>
                  <span className="px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base" style={{ backgroundColor: 'var(--edu-accent)', color: 'var(--edu-soft-white)' }}>Exporta a PDF o Google Docs instantáneamente.</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border shadow-float max-w-md mx-auto lg:max-w-none" style={{ borderColor: 'var(--edu-mid)' }}>
                <div className="p-3 flex gap-2" style={{ backgroundColor: 'var(--edu-darkest)' }}>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-3 sm:h-4 rounded w-3/4" style={{ backgroundColor: 'var(--edu-lightest)' }}></div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="h-9 sm:h-10 rounded border-2" style={{ backgroundColor: 'var(--edu-lightest)', borderColor: 'var(--edu-light)' }}></div>
                      <div className="h-9 sm:h-10 rounded border-2" style={{ backgroundColor: 'var(--edu-lightest)', borderColor: 'var(--edu-light)' }}></div>
                    </div>
                    <div className="h-20 sm:h-24 md:h-32 rounded border-2 border-dashed flex items-center justify-center" style={{ backgroundColor: 'color-mix(in srgb, var(--edu-accent) 5%, transparent)', borderColor: 'var(--edu-accent)' }}>
                      <span className="font-semibold text-xs sm:text-sm md:text-base px-2 text-center" style={{ color: 'var(--edu-accent)' }}>Generando ejercicios...</span>
                    </div>
                    <div className="h-9 sm:h-10 rounded w-full flex items-center justify-center" style={{ backgroundColor: 'var(--edu-mid)' }}>
                      <span className="text-white text-xs sm:text-sm font-bold">Generar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section aria-labelledby="benefits-heading" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-pattern">
        <div className="container mx-auto max-w-7xl">
          <h2 id="benefits-heading" className="sr-only">Beneficios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center">

            <div className="flex flex-col items-center">
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-full shadow-soft-xl bg-white/50 backdrop-blur-sm border" style={{ borderColor: 'var(--edu-badge-border)' }}>
                <HiClock className="w-8 h-8 md:w-10 md:h-10" style={{ color: 'var(--edu-accent)' }} aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: 'var(--edu-darkest)' }}>Ahorro de tiempo</h3>
              <p className="text-sm md:text-base px-2" style={{ color: 'var(--edu-dark)' }}>Reduce horas de planificación y creación de material a solo unos minutos de edición final.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-full shadow-soft-xl bg-white/50 backdrop-blur-sm border" style={{ borderColor: 'var(--edu-badge-border)' }}>
                <HiUser className="w-8 h-8 md:w-10 md:h-10" style={{ color: 'var(--edu-accent)' }} aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: 'var(--edu-darkest)' }}>Contenido personalizado</h3>
              <p className="text-sm md:text-base px-2" style={{ color: 'var(--edu-dark)' }}>Crea versiones diferenciadas para cada estudiante según sus necesidades específicas de aprendizaje.</p>
            </div>

            <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-full shadow-soft-xl bg-white/50 backdrop-blur-sm border" style={{ borderColor: 'var(--edu-badge-border)' }}>
                <HiCheckCircle className="w-8 h-8 md:w-10 md:h-10" style={{ color: 'var(--edu-accent)' }} aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: 'var(--edu-darkest)' }}>Fácil de usar</h3>
              <p className="text-sm md:text-base px-2" style={{ color: 'var(--edu-dark)' }}>Interfaz amigable que no requiere conocimientos técnicos. Empieza a crear desde el primer día.</p>
            </div>

          </div>
        </div>
      </section>

      {/* AVISO */}
      <section aria-labelledby="disclaimer-heading" className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 text-center border" style={{ backgroundColor: 'var(--edu-soft-white)', borderColor: 'var(--edu-card-border)' }}>
            <div className="flex justify-center mb-4">
              <div className="p-2.5 rounded-full" style={{ backgroundColor: 'var(--edu-glow-accent-soft)' }}>
                <HiCheckCircle className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: 'var(--edu-accent)' }} aria-hidden="true" />
              </div>
            </div>
            <h2 id="disclaimer-heading" className="text-lg sm:text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--edu-darkest)' }}>
              Una herramienta que acompaña, no que reemplaza
            </h2>
            <p className="text-sm sm:text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--edu-dark)' }}>
              Cognitia está pensada para asistir a los docentes en la creación de material didáctico. La experiencia, el criterio profesional y la relación con tus alumnos son insustituibles.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
