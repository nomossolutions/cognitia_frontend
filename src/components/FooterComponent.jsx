import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiInformationCircle, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import '../styles/footer.css';

export const FooterComponent = () => {
    return (
        <footer className="bg-(--edu-darkest) py-20 px-6 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                        <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
                            Cognitia <span className="text-(--edu-mid) text-sm uppercase tracking-widest">Education</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className="text-(--edu-light) max-w-md text-sm leading-relaxed">
                            Tu tutor personal impulsado por inteligencia artificial. Ejercicios personalizados en múltiples disciplinas,
                            seguimiento continuo y material adaptado a tu nivel de aprendizaje.
                        </p>
                        <div className="flex items-start gap-2 bg-(--edu-mid)/10 border border-(--edu-mid)/20 p-4 rounded-lg max-w-md">
                            <HiInformationCircle className="w-5 h-5 text-(--edu-mid) shrink-0 mt-0.5" />
                            <p className="text-(--edu-light) text-xs leading-relaxed">
                                <span className="text-white/90 font-semibold">Importante:</span> Los ejercicios son generados por IA. 
                                Verifica siempre que el contenido se adapte a tu nivel educativo.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                        <p className="text-(--edu-light) text-sm leading-relaxed">
                            ¿Te gusta el proyecto? Ayúdanos a seguir mejorando:
                        </p>
                        <a 
                            href='https://cafecito.app/jcforni' 
                            rel='noopener' 
                            target='_blank'
                            className='inline-block transition-transform hover:scale-105 w-fit'
                        >
                            <img 
                                srcSet='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' 
                                src='https://cdn.cafecito.app/imgs/buttons/button_1.png' 
                                alt='Invitame un café en cafecito.app'
                                className='w-40 h-auto'
                            />
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h5 className="text-white/80 font-bold mb-6 uppercase tracking-wider text-sm">Navegación</h5>
                    <ul className="space-y-4 text-(--edu-light) text-sm">
                        <li><NavLink className="hover:text-(--edu-mid) transition-colors" to="/">Inicio</NavLink></li>
                        <li><a className="hover:text-(--edu-mid) transition-colors" href="/#disciplines">Disciplinas</a></li>
                        <li><NavLink className="hover:text-(--edu-mid) transition-colors" to="/nosotros">Nosotros</NavLink></li>
                        <li><NavLink className="hover:text-(--edu-mid) transition-colors" to="/contacto">Contacto</NavLink></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h5 className="text-white/80 font-bold mb-6 uppercase tracking-wider text-sm">Recursos</h5>
                    <ul className="space-y-4 text-(--edu-light) text-sm">
                        <li>
                            <a className="hover:text-(--edu-mid) transition-colors flex items-center gap-2" href="https://cafecito.app/jcforni" target="_blank" rel="noopener">
                                Apoyar Proyecto
                                <HiArrowTopRightOnSquare className="w-3 h-3" />
                            </a>
                        </li>
                        <li><NavLink className="hover:text-(--edu-mid) transition-colors" to="/nosotros">Sobre el Proyecto</NavLink></li>
                        <li>
                            <span className="text-gray-500 cursor-not-allowed">Términos de Uso</span>
                        </li>
                        <li>
                            <span className="text-gray-500 cursor-not-allowed">Privacidad</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-white/80 text-xs mt-2">
                        © 2026 Cognitia Education. Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-white/80 text-sm">
                    <p className="text-center md:text-right">
                        Desarrollado por <a href="https://nomos-solutions.vercel.app/" className='text-transparent bg-clip-text bg-(--edu-accent) hover:underline transition-colors font-semibold'>Nomos Solutions</a>
                    </p>
                </div>
            </div>

        </footer>
    )
}
