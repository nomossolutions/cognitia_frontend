import React, { useState } from 'react';
import { PhysicExerciseIA } from '../helpers/configIa'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { MyDocumentPDF } from '../components/pdf';
import { HiBolt, HiSparkles, HiUserGroup, HiAcademicCap, HiBuildingLibrary, HiInformationCircle } from 'react-icons/hi2';
import '../styles/exercises.css';
import '../styles/home.css';

export const PhysicExercise = () => {

  const [ejercicios, setEjercicios] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [nivelSeleccionado, setNivelSeleccionado] = useState('Secundaria');

  async function presion(e) {
    e.preventDefault();
    setIsLoading(true);

    const mensaje = {
      tema: e.target.tema.value,
      cantidad: e.target.cantidad.value,
      grado: nivelSeleccionado,
    }
    const respuesta = await PhysicExerciseIA(mensaje);
    setEjercicios(respuesta);
    setIsLoading(false);
  }

  return (
    <>
      <div id='principalContainer' className="min-h-screen flex flex-col lg:flex-row gap-0 bg-pattern">
        <form onSubmit={presion} id="principalForm" className="p-6 sm:p-8 shadow-2xl w-full lg:w-96 flex flex-col gap-6" style={{backgroundColor: 'var(--edu-lightest)'}}>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--edu-mid)'}}>
                <HiBolt className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold" style={{color: 'var(--edu-darkest)'}}>Física</h3>
            </div>
            <p className="text-xs uppercase tracking-widest font-semibold" style={{color: 'var(--edu-accent)'}}>Configuración de ejercicios</p>
          </div>
          
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="tema" className="text-sm font-medium" style={{color: 'var(--edu-darkest)'}}>Tema</label>
              <input 
                type="text" 
                id="tema" 
                className="input-tema w-full px-4 py-3 border-none rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                style={{backgroundColor: 'rgba(74, 102, 77, 0.5)', color: 'var(--edu-darkest)', caretColor: 'var(--edu-darkest)'}}
                placeholder="Ej. Cinemática, Dinámica, Óptica..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium" style={{color: 'var(--edu-darkest)'}}>Nivel Educativo</label>
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => setNivelSeleccionado('Primaria')}
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                  style={{
                    backgroundColor: nivelSeleccionado === 'Primaria' ? 'var(--edu-mid)' : 'rgba(74, 102, 77, 0.5)'
                  }}
                >
                  <HiUserGroup className="w-5 h-5" style={{color: nivelSeleccionado === 'Primaria' ? 'var(--edu-lightest)' : 'var(--edu-darkest)'}} />
                  <span className="text-sm" style={{color: nivelSeleccionado === 'Primaria' ? 'var(--edu-lightest)' : 'var(--edu-darkest)'}}>Primaria</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNivelSeleccionado('Secundaria')}
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                  style={{
                    backgroundColor: nivelSeleccionado === 'Secundaria' ? 'var(--edu-mid)' : 'rgba(74, 102, 77, 0.5)'
                  }}
                >
                  <HiAcademicCap className="w-5 h-5" style={{color: nivelSeleccionado === 'Secundaria' ? 'var(--edu-lightest)' : 'var(--edu-darkest)'}} />
                  <span className="text-sm" style={{color: nivelSeleccionado === 'Secundaria' ? 'var(--edu-lightest)' : 'var(--edu-darkest)'}}>Secundaria</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNivelSeleccionado('Universidad')}
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                  style={{
                    backgroundColor: nivelSeleccionado === 'Universidad' ? 'var(--edu-mid)' : 'rgba(74, 102, 77, 0.5)'
                  }}
                >
                  <HiBuildingLibrary className="w-5 h-5" style={{color: nivelSeleccionado === 'Universidad' ? 'var(--edu-lightest)' : 'var(--edu-darkest)'}} />
                  <span className="text-sm" style={{color: nivelSeleccionado === 'Universidad' ? 'var(--edu-lightest)' : 'var(--edu-darkest)'}}>Universidad</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="cantidad" className="text-sm font-medium" style={{color: 'var(--edu-darkest)'}}>Cantidad de ejercicios</label>
              <input 
                type="number" 
                id="cantidad" 
                min={0} 
                max={100} 
                placeholder="10" 
                className="input-cantidad w-full px-4 py-3 border-none rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                style={{backgroundColor: 'rgba(74, 102, 77, 0.5)', color: 'var(--edu-darkest)', caretColor: 'var(--edu-darkest)'}}
              />
              <p className="text-xs" style={{color: 'var(--edu-mid)'}}>
                Máximo: 100 ejercicios por solicitud
              </p>
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" className="w-full font-bold py-4 px-4 rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-float text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer" style={{background: 'linear-gradient(to right, var(--edu-accent-light), var(--edu-accent))', color: 'white'}}>
              <HiSparkles className="w-5 h-5" />
              <span>Generar Ejercicios</span>
            </button>
          </div>
          
          <div className="mt-auto pt-6 border-t flex items-center gap-3" style={{borderColor: 'rgba(74, 102, 77, 0.2)'}}>
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{backgroundColor: 'var(--edu-mid)'}}>
              <HiInformationCircle className="w-5 h-5" style={{color: 'var(--edu-lightest)'}} />
            </div>
            <p className="text-[10px] leading-tight" style={{color: 'var(--edu-mid)'}}>
              La IA adapta el contenido al nivel de física seleccionado.
            </p>
          </div>
        </form>
        
        <section className="flex-1 p-6 sm:p-8 overflow-y-auto" style={{backgroundColor: 'var(--edu-soft-white)'}}>
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2" style={{backgroundColor: 'rgba(231, 111, 81, 0.1)', color: 'var(--edu-accent)'}}>
                  <HiSparkles className="w-3 h-3" /> Generado por IA
                </span>
                <h2 className="text-2xl sm:text-3xl font-black" style={{color: 'var(--edu-darkest)'}}>Ejercicios de Física</h2>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft-xl hover:shadow-float transition-all duration-300 border-none">
              <div className="flex items-center gap-3 mb-6">
                <HiBolt className="w-6 h-6" style={{color: 'var(--edu-mid)'}} />
                <h3 className="text-lg font-bold" style={{color: 'var(--edu-darkest)'}}>Contenido Generado</h3>
              </div>
              
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="relative w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin" style={{borderColor: 'var(--edu-accent)', borderTopColor: 'transparent'}}></div>
                  </div>
                  <p className="font-semibold text-lg" style={{color: 'var(--edu-accent)'}}>
                    Generando ejercicios...
                  </p>
                  <p className="text-sm mt-2" style={{color: 'var(--edu-mid)'}}>Esto puede tomar unos segundos</p>
                </div>
              ) : (
                <div className="prose max-w-none">
                  {ejercicios ? (
                    <>
                      <div className="text-sm sm:text-base leading-relaxed" style={{color: 'var(--edu-dark)'}}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {ejercicios}
                        </ReactMarkdown>
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start">
                        <PDFDownloadLink
                          document={<MyDocumentPDF rutina={ejercicios} />}
                          fileName="ejercicios-fisica.pdf"
                          className="px-4 py-2 rounded-lg font-bold text-white"
                          style={{background: 'linear-gradient(to right, var(--edu-accent-light), var(--edu-accent))'}}
                        >
                          {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF en PDF')}
                        </PDFDownloadLink>
                        <span className="text-xs text-gray-500">Se aplican estilos de PDF del mismo estilo visual.</span>
                      </div>

                      <div className="mt-4" style={{height: '780px', minHeight: '780px'}}>
                        <PDFViewer style={{width: '100%', height: '100%'}}>
                          <MyDocumentPDF rutina={ejercicios} />
                        </PDFViewer>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'rgba(163, 177, 138, 0.1)'}}>
                        <HiBolt className="w-8 h-8" style={{color: 'var(--edu-light)'}} />
                      </div>
                      <p className="font-medium" style={{color: 'var(--edu-mid)'}}>Configura los parámetros y genera ejercicios personalizados</p>
                      <p className="text-xs mt-2" style={{color: 'var(--edu-light)'}}>Usa el panel lateral para comenzar</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
};