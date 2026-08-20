import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PDFContent, PDFDownloadLink, ExerciseViewer } from './pdf';
import { HiSparkles, HiUserGroup, HiAcademicCap, HiBuildingLibrary, HiInformationCircle, HiChevronDown, HiCheck } from 'react-icons/hi2';

const CustomDropdown = ({ name, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div ref={dropdownRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm font-medium border flex items-center justify-between cursor-pointer"
        style={{
          backgroundColor: 'var(--edu-surface-elevated)',
          color: value ? 'var(--edu-darkest)' : 'var(--edu-mid)',
          borderColor: isOpen ? 'var(--edu-accent)' : 'var(--edu-card-border)',
          boxShadow: isOpen ? '0 0 0 3px var(--edu-glow-accent-soft)' : 'none'
        }}
      >
        <span className="truncate">{value || placeholder}</span>
        <HiChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
          style={{
            color: 'var(--edu-mid)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </button>
      {isOpen && (
        <div
          className="absolute z-50 w-full mt-1.5 py-1.5 rounded-xl border overflow-hidden"
          style={{
            backgroundColor: 'var(--edu-surface-elevated)',
            borderColor: 'var(--edu-card-border)',
            boxShadow: '0 12px 36px -8px rgba(52, 78, 65, 0.18), 0 4px 12px -4px rgba(52, 78, 65, 0.08)',
            animation: 'dropdown-open 0.18s ease-out'
          }}
        >
          <div className="max-h-[200px] overflow-y-auto custom-scrollbar">
            {options.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setIsOpen(false); }}
                className="w-full px-3 py-2 text-left text-sm font-medium flex items-center justify-between gap-2 cursor-pointer transition-colors duration-100"
                style={{
                  color: value === opt ? 'var(--edu-accent)' : 'var(--edu-dark)',
                  backgroundColor: value === opt ? 'var(--edu-glow-accent-soft)' : 'transparent'
                }}
                onMouseEnter={e => {
                  if (value !== opt) e.currentTarget.style.backgroundColor = 'var(--edu-soft-white)';
                }}
                onMouseLeave={e => {
                  if (value !== opt) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span className="truncate">{opt}</span>
                {value === opt && <HiCheck className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--edu-accent)' }} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const LevelButton = ({ level, selected, onClick, icon: Icon }) => (
  <button
    type="button"
    role="radio"
    aria-checked={selected}
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-1.5 p-2.5 min-h-[48px] rounded-2xl cursor-pointer transition-all duration-200 select-none group relative overflow-hidden"
    style={{
      backgroundColor: selected ? 'var(--edu-dark)' : 'var(--edu-surface-elevated)',
      border: selected ? '1.5px solid var(--edu-dark)' : '1px solid var(--edu-card-border)',
      boxShadow: selected ? '0 4px 14px -2px rgba(0,0,0,0.12)' : 'none',
      transform: selected ? 'translateY(-1px)' : 'none'
    }}
  >
    {Icon && (
      <Icon
        className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
        style={{ color: selected ? 'var(--edu-accent)' : 'var(--edu-mid)' }}
      />
    )}
    <span
      className="text-xs font-semibold tracking-wide"
      style={{ color: selected ? '#ffffff' : 'var(--edu-darkest)' }}
    >
      {level}
    </span>
  </button>
);

const ExerciseTabs = ({ showPdfPreview, setShowPdfPreview }) => (
  <div className="inline-flex p-1 gap-1 rounded-2xl border" style={{ backgroundColor: 'var(--edu-soft-white)', borderColor: 'var(--edu-card-border)' }} role="tablist">
    <button
      role="tab"
      aria-selected={!showPdfPreview}
      onClick={() => setShowPdfPreview(false)}
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
      style={{
        backgroundColor: !showPdfPreview ? 'var(--edu-darkest)' : 'transparent',
        color: !showPdfPreview ? '#ffffff' : 'var(--edu-mid)',
        boxShadow: !showPdfPreview ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
      }}
    >
      Vista Interactiva
    </button>
    <button
      role="tab"
      aria-selected={showPdfPreview}
      onClick={() => setShowPdfPreview(true)}
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
      style={{
        backgroundColor: showPdfPreview ? 'var(--edu-darkest)' : 'transparent',
        color: showPdfPreview ? '#ffffff' : 'var(--edu-mid)',
        boxShadow: showPdfPreview ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
      }}
    >
      Vista PDF
    </button>
  </div>
);

export const ExercisePage = ({
  title,
  icon: Icon,
  iaFunction,
  description,
  extraFields = [],
}) => {
  const [ejercicios, setEjercicios] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nivelSeleccionado, setNivelSeleccionado] = useState('Secundaria');
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const [formatoSeleccionado, setFormatoSeleccionado] = useState('opcion_multiple');
  const [extraFieldValues, setExtraFieldValues] = useState(() => {
    const initial = {};
    extraFields.forEach(f => { initial[f.name] = ''; });
    return initial;
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const mensaje = {
      tema: e.target.tema.value,
      cantidad: e.target.cantidad.value,
      tipoEjercicio: formatoSeleccionado,
      grado: nivelSeleccionado,
    };

    extraFields.forEach(field => {
      mensaje[field.name] = extraFieldValues[field.name] || '';
    });

    try {
      const respuesta = await iaFunction(mensaje);
      setEjercicios(respuesta);
    } catch (err) {
      console.error('Error generating exercises:', err);
      setError('Ocurrió un error al generar los ejercicios. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    // Fijamos la pantalla completa sin scroll general (h-screen y overflow-hidden en LG)
    <div id='principalContainer' className="h-screen w-full flex flex-col lg:flex-row bg-pattern font-sans antialiased overflow-hidden">

      {/* Sidebar Form (Scrollable si la pantalla es muy pequeña verticalmente) */}
      <form
        onSubmit={handleSubmit}
        id="principalForm"
        className="p-6 w-full lg:w-[380px] border-r flex flex-col gap-5 h-full overflow-y-auto shrink-0"
        style={{
          backgroundColor: 'var(--edu-lightest)',
          borderColor: 'var(--edu-card-border)',
          boxShadow: '4px 0 24px -2px rgba(0,0,0,0.03)'
        }}
      >
        {/* Panel Header */}
        <div className="flex flex-col gap-2 pb-3 border-b" style={{ borderColor: 'color-mix(in srgb, var(--edu-mid) 15%, transparent)' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm" style={{ backgroundColor: 'var(--edu-darkest)' }}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold tracking-tight" style={{ color: 'var(--edu-darkest)' }}>{title}</h3>
              <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5" style={{ color: 'var(--edu-accent)' }}>Configuración IA</p>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {extraFields.map(field => (
            <div key={field.name} className="flex flex-col gap-1">
              <label htmlFor={field.name} className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--edu-darkest)' }}>{field.label}</label>
              {field.type === 'select' ? (
                <CustomDropdown
                  name={field.name}
                  options={field.options}
                  value={extraFieldValues[field.name]}
                  onChange={(val) => setExtraFieldValues(prev => ({ ...prev, [field.name]: val }))}
                  placeholder={`Seleccionar ${field.label.toLowerCase()}...`}
                />
              ) : (
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm font-medium border"
                  style={{
                    backgroundColor: 'var(--edu-surface-elevated)',
                    color: 'var(--edu-darkest)',
                    borderColor: 'var(--edu-card-border)'
                  }}
                />
              )}
            </div>
          ))}

          <div className="flex flex-col gap-1">
            <label htmlFor="tema" className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--edu-darkest)' }}>Tema Principal</label>
            <input
              type="text"
              id="tema"
              name="tema"
              placeholder="Describe el tema para los ejercicios..."
              required
              className="w-full px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm font-medium border"
              style={{
                backgroundColor: 'var(--edu-surface-elevated)',
                color: 'var(--edu-darkest)',
                borderColor: 'var(--edu-card-border)'
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--edu-darkest)' }}>Nivel Educativo</span>
            <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="Nivel educativo">
              <LevelButton level="Primaria" selected={nivelSeleccionado === 'Primaria'} onClick={() => setNivelSeleccionado('Primaria')} icon={HiUserGroup} />
              <LevelButton level="Secundaria" selected={nivelSeleccionado === 'Secundaria'} onClick={() => setNivelSeleccionado('Secundaria')} icon={HiAcademicCap} />
              <LevelButton level="Universidad" selected={nivelSeleccionado === 'Universidad'} onClick={() => setNivelSeleccionado('Universidad')} icon={HiBuildingLibrary} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="cantidad" className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--edu-darkest)' }}>Cantidad</label>
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                min={1}
                max={100}
                placeholder="10"
                defaultValue={10}
                required
                className="w-full px-3.5 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm font-medium border"
                style={{
                  backgroundColor: 'var(--edu-surface-elevated)',
                  color: 'var(--edu-darkest)',
                  borderColor: 'var(--edu-card-border)'
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="tipoEjercicio" className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--edu-darkest)' }}>Formato</label>
              <CustomDropdown
                name="tipoEjercicio"
                options={['Opción Múltiple', 'Verdadero/Falso', 'Completar', 'Respuesta Libre']}
                value={formatoSeleccionado === 'opcion_multiple' ? 'Opción Múltiple' : formatoSeleccionado === 'verdadero_falso' ? 'Verdadero/Falso' : formatoSeleccionado === 'completar' ? 'Completar' : 'Respuesta Libre'}
                onChange={(val) => {
                  const map = { 'Opción Múltiple': 'opcion_multiple', 'Verdadero/Falso': 'verdadero_falso', 'Completar': 'completar', 'Respuesta Libre': 'respuesta_libre' };
                  setFormatoSeleccionado(map[val]);
                }}
                placeholder="Seleccionar formato..."
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-1">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full font-bold py-3 px-4 rounded-xl transition-all duration-200 transform active:scale-[0.98] text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: 'var(--edu-accent)', color: 'white' }}
          >
            <HiSparkles className="w-4 h-4 animate-pulse" />
            <span>{isLoading ? 'Generando...' : 'Generar Ejercicios'}</span>
          </button>
        </div>

        {error && (
          <div role="alert" className="flex items-center gap-2.5 p-3 rounded-xl text-xs font-medium" style={{ backgroundColor: 'var(--edu-error-bg)', color: 'var(--edu-error)', border: '1px solid color-mix(in srgb, var(--edu-error) 25%, transparent)' }}>
            <HiInformationCircle className="w-4 h-4 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-auto pt-3 border-t flex items-center gap-2.5" style={{ borderColor: 'color-mix(in srgb, var(--edu-mid) 15%, transparent)' }}>
          <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--edu-glow-accent-subtle)' }}>
            <HiInformationCircle className="w-3.5 h-3.5" style={{ color: 'var(--edu-accent)' }} />
          </div>
          <p className="text-[10px] leading-snug font-medium" style={{ color: 'var(--edu-mid)' }}>
            {description}
          </p>
        </div>
      </form>

      {/* Main Area: Fija y estructurada para contener el scroll internamente */}
      <section className="flex-1 p-6 lg:p-8 flex flex-col h-full overflow-hidden" style={{ backgroundColor: 'var(--edu-soft-white)' }}>
        <div className="max-w-4xl mx-auto w-full flex flex-col h-full gap-4">

          {/* Header Superior */}
          <div className="flex items-center justify-between flex-wrap gap-2 shrink-0 pb-2 border-b" style={{ borderColor: 'var(--edu-card-border)' }}>
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest mb-1" style={{ backgroundColor: 'var(--edu-glow-accent-soft)', color: 'var(--edu-accent)' }}>
                <HiSparkles className="w-3 h-3" /> Motor Cognitia IA
              </span>
              <h2 className="text-2xl font-black tracking-tight" style={{ color: 'var(--edu-darkest)' }}>
                {title}
              </h2>
            </div>
          </div>

          {/* Tarjeta Contenedora Principal */}
          <div
            className="rounded-3xl p-6 transition-all duration-300 border flex flex-col flex-1 min-h-0 overflow-hidden relative"
            style={{
              backgroundColor: '#ffffff',
              borderColor: 'var(--edu-card-border)',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)'
            }}
          >
            {isLoading ? (
              <div className="flex flex-col items-center justify-center my-auto py-12" aria-live="polite">
                <div className="relative w-12 h-12 mb-3">
                  <div className="absolute inset-0 rounded-full border-3 border-t-transparent animate-spin" style={{ borderColor: 'var(--edu-accent)', borderTopColor: 'transparent' }}></div>
                </div>
                <p className="font-bold text-sm" style={{ color: 'var(--edu-darkest)' }}>
                  Sintetizando ejercicios...
                </p>
                <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--edu-mid)' }}>Optimizando según el nivel educativo</p>
              </div>
            ) : ejercicios ? (
              <>
                {/* Header de pestañas y botones (Fijo) */}
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4 shrink-0">
                  <ExerciseTabs showPdfPreview={showPdfPreview} setShowPdfPreview={setShowPdfPreview} />
                  {showPdfPreview && (
                    <PDFDownloadLink
                      ejercicio={ejercicios}
                      titulo={`Ejercicios de ${title}`}
                      className="shadow-sm hover:shadow transition-shadow"
                    />
                  )}
                </div>

                {/* CONTENEDOR DE SCROLL PROPIO */}
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <div id="panel-ejercicios" role="tabpanel" hidden={showPdfPreview} className="focus:outline-none">
                    <ExerciseViewer ejercicio={ejercicios} />
                  </div>

                  <div id="panel-pdf" role="tabpanel" hidden={!showPdfPreview} className="focus:outline-none rounded-2xl overflow-hidden border h-full" style={{ borderColor: 'var(--edu-card-border)' }}>
                    <div className="h-full min-h-[450px]">
                      <PDFContent ejercicio={ejercicios} titulo={`Ejercicios de ${title}`} preview />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center my-auto py-12 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl mb-3 flex items-center justify-center shadow-inner" style={{ backgroundColor: 'var(--edu-glow-accent-subtle)' }}>
                  <Icon className="w-7 h-7" style={{ color: 'var(--edu-accent)' }} />
                </div>
                <h4 className="font-bold text-sm mb-0.5" style={{ color: 'var(--edu-darkest)' }}>Panel de Vista Previa</h4>
                <p className="text-xs max-w-xs font-medium" style={{ color: 'var(--edu-mid)' }}>
                  Completa los parámetros del panel izquierdo y presiona <strong style={{ color: 'var(--edu-darkest)' }}>Generar Ejercicios</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};