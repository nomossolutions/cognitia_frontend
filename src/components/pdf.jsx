import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink as PDFDownloadLinkBase,
} from "@react-pdf/renderer";

const fechaActual = new Date().toLocaleDateString("es-AR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const safeArray = (value) => (Array.isArray(value) ? value : []);
const str = (value) => (value === undefined || value === null || value === "" ? "-" : String(value));

// PALETA UNIFICADA (HEXA EQUIVALENTES A VARS EDU)
const COLOR = {
  darkest: "#1e293b",
  accent: "#e76f51",
  accentLight: "#f4a261",
  cardBorder: "#e2e8f0",
  textMain: "#0f172a",
  textMuted: "#64748b",
  bgLight: "#f8fafc",
  successBg: "#f0fdf4",
  successBorder: "#22c55e",
  warnBg: "#fff7ed",
  warnBorder: "#ffedd5",
  warnText: "#c2410c",
};

/* ============================================================
    1. ESTILOS REGLAMENTARIOS PARA EL DOCUMENTO PDF
============================================================ */
const pdfStyles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 36,
    paddingHorizontal: 32,
    fontSize: 9,
    color: COLOR.textMain,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  heroHeader: {
    backgroundColor: COLOR.darkest,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroMateria: {
    fontSize: 7,
    fontWeight: "bold",
    color: COLOR.accent,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  heroTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 2,
  },
  metaContainer: {
    flexDirection: "row",
    gap: 12,
  },
  metaBlock: {
    alignItems: "flex-end",
  },
  metaLabel: {
    fontSize: 6,
    fontWeight: "bold",
    color: "#a3b18a",
    textTransform: "uppercase",
  },
  metaValue: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 1,
  },
  instruccionesBox: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: COLOR.bgLight,
    borderColor: COLOR.cardBorder,
    marginBottom: 12,
  },
  instruccionesLabel: {
    fontSize: 6.5,
    fontWeight: "bold",
    color: COLOR.textMuted,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  instruccionesText: {
    fontSize: 8.5,
    lineHeight: 1.4,
    color: COLOR.textMain,
  },
  ejercicioCard: {
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.cardBorder,
    backgroundColor: "#ffffff",
  },
  ejercicioHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  badgeNumero: {
    backgroundColor: COLOR.accent,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  ejercicioTipo: {
    fontSize: 7,
    color: COLOR.textMuted,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  ejercicioEnunciado: {
    fontSize: 9,
    fontWeight: "bold",
    color: COLOR.textMain,
    marginBottom: 8,
    lineHeight: 1.35,
  },
  opcionesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 4,
  },
  opcionBox: {
    width: "48%",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLOR.cardBorder,
    backgroundColor: COLOR.bgLight,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  opcionBoxCorrecta: {
    backgroundColor: COLOR.successBg,
    borderColor: COLOR.successBorder,
  },
  opcionDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLOR.textMuted,
  },
  opcionDotCorrecta: {
    backgroundColor: COLOR.successBorder,
  },
  opcionText: {
    fontSize: 8,
    fontWeight: "semibold",
    color: COLOR.textMain,
  },
  explicacionBox: {
    marginTop: 6,
    padding: 8,
    backgroundColor: COLOR.warnBg,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLOR.warnBorder,
  },
  explicacionLabel: {
    fontSize: 6.5,
    fontWeight: "bold",
    color: COLOR.warnText,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  explicacionText: {
    fontSize: 8,
    lineHeight: 1.35,
    color: COLOR.textMain,
  },
  footer: {
    position: "absolute",
    bottom: 16,
    left: 32,
    right: 32,
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    paddingTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: COLOR.textMuted,
    fontSize: 7,
  },
});

/* ============================================================
    2. DOCUMENTO PDF (DESCARGA E IMPRESIÓN)
============================================================ */
const PdfEjercicioCard = ({ ejercicio }) => (
  <View style={pdfStyles.ejercicioCard} wrap={false}>
    <View style={pdfStyles.ejercicioHeader}>
      <Text style={pdfStyles.badgeNumero}>{str(ejercicio.numero)}</Text>
      <Text style={pdfStyles.ejercicioTipo}>{str(ejercicio.tipo || "opcion_multiple")}</Text>
    </View>
    <Text style={pdfStyles.ejercicioEnunciado}>{str(ejercicio.enunciado)}</Text>

    {safeArray(ejercicio.opciones).length > 0 && (
      <View style={pdfStyles.opcionesGrid}>
        {ejercicio.opciones.map((opcion, idx) => {
          const esCorrecta = opcion.startsWith(ejercicio.respuestaCorrecta);
          return (
            <View key={idx} style={[pdfStyles.opcionBox, esCorrecta && pdfStyles.opcionBoxCorrecta]}>

              <Text style={pdfStyles.opcionText}>{str(opcion)}</Text>
            </View>
          );
        })}
      </View>
    )}

    {safeArray(ejercicio.opciones).length === 0 && ejercicio.respuestaCorrecta && (
      <View style={[pdfStyles.opcionBox, pdfStyles.opcionBoxCorrecta]}>
        <View style={[pdfStyles.opcionDot, pdfStyles.opcionDotCorrecta]} />
        <Text style={pdfStyles.opcionText}>
          {ejercicio.tipo === 'verdadero_falso'
            ? `Respuesta: ${str(ejercicio.respuestaCorrecta)}`
            : `Respuestas: ${str(ejercicio.respuestaCorrecta)}`}
        </Text>
      </View>
    )}

    {ejercicio.explicacion && (
      <View style={pdfStyles.explicacionBox}>
        <Text style={pdfStyles.explicacionLabel}>Explicación paso a paso</Text>
        <Text style={pdfStyles.explicacionText}>{str(ejercicio.explicacion)}</Text>
      </View>
    )}
  </View>
);

export const ExerciseDocument = ({ ejercicio, titulo = "Ejercicios" }) => {
  if (!ejercicio) return null;
  const ejercicios = safeArray(ejercicio.ejercicios);

  return (
    <Document title={`${titulo} - Cognitia`}>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.heroHeader}>
          <View>
            <Text style={pdfStyles.heroMateria}>{str(ejercicio.materia)}</Text>
            <Text style={pdfStyles.heroTitle}>{str(ejercicio.titulo || titulo)}</Text>
          </View>
          <View style={pdfStyles.metaContainer}>
            <View style={pdfStyles.metaBlock}>
              <Text style={pdfStyles.metaLabel}>Tema</Text>
              <Text style={pdfStyles.metaValue}>{str(ejercicio.tema)}</Text>
            </View>
            <View style={pdfStyles.metaBlock}>
              <Text style={pdfStyles.metaLabel}>Nivel</Text>
              <Text style={pdfStyles.metaValue}>{str(ejercicio.nivel)}</Text>
            </View>
            <View style={pdfStyles.metaBlock}>
              <Text style={pdfStyles.metaLabel}>Fecha</Text>
              <Text style={pdfStyles.metaValue}>{fechaActual}</Text>
            </View>
          </View>
        </View>

        {ejercicio.instrucciones && (
          <View style={pdfStyles.instruccionesBox} wrap={false}>
            <Text style={pdfStyles.instruccionesLabel}>Instrucciones para el estudiante</Text>
            <Text style={pdfStyles.instruccionesText}>{str(ejercicio.instrucciones)}</Text>
          </View>
        )}

        {ejercicios.length > 0 && (
          <View>
            {ejercicios.map((ej, index) => (
              <PdfEjercicioCard key={index} ejercicio={ej} />
            ))}
          </View>
        )}

        <View style={pdfStyles.footer} fixed>
          <Text style={{ fontWeight: "bold", color: COLOR.textMuted }}>Cognitia Education</Text>
          <Text>© {new Date().getFullYear()} powered by Nomos Digital</Text>
        </View>
      </Page>
    </Document>
  );
};

export const PDFContent = ({ ejercicio, titulo = "Ejercicios", preview = false }) => {
  if (!ejercicio) return null;
  return (
    <PDFViewer showToolbar={false} style={{ width: "100%", height: preview ? "100%" : 500, border: "none" }}>
      <ExerciseDocument ejercicio={ejercicio} titulo={titulo} />
    </PDFViewer>
  );
};

export const PDFDownloadLink = ({ ejercicio, titulo = "Ejercicios", className = "" }) => {
  if (!ejercicio) return null;
  const safeTitulo = (titulo || "Ejercicios").trim().replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_-]/g, "");
  const formattedDate = new Date().toISOString().split("T")[0];

  return (
    <PDFDownloadLinkBase
      document={<ExerciseDocument ejercicio={ejercicio} titulo={titulo} />}
      fileName={`${safeTitulo}_${formattedDate}.pdf`}
      className={`inline-flex items-center gap-2 text-white font-bold py-2 px-4 rounded-xl transition-all text-xs uppercase tracking-wider ${className}`}
      style={{ backgroundColor: COLOR.accent }}
    >
      <span>Descargar PDF</span>
    </PDFDownloadLinkBase>
  );
};

/* ============================================================
    3. VISTA WEB INTERACTIVA (RÉPLICA EXACTA DE INTERFAZ PDF)
============================================================ */
const tipoLabels = {
  opcion_multiple: 'Opción Múltiple',
  verdadero_falso: 'Verdadero o Falso',
  completar: 'Completar',
  respuesta_libre: 'Respuesta Libre',
};

export const ExerciseViewer = ({ ejercicio }) => {
  if (!ejercicio) return null;
  const ejercicios = safeArray(ejercicio.ejercicios);

  return (
    <div className="space-y-3 font-sans antialiased text-left">
      {/* Hero Header Card */}
      <div
        className="p-3.5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm"
        style={{ backgroundColor: COLOR.darkest, borderColor: COLOR.darkest }}
      >
        <div>
          <span className="text-[9px] uppercase tracking-widest font-extrabold block" style={{ color: COLOR.accent }}>
            {str(ejercicio.materia)}
          </span>
          <h3 className="text-base font-bold text-white tracking-tight mt-0.5">{str(ejercicio.titulo)}</h3>
        </div>
        <div className="flex gap-4 border-t md:border-t-0 md:border-l pt-2 md:pt-0 md:pl-4" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
          <div className="text-right">
            <p className="text-[8px] uppercase tracking-wider font-extrabold" style={{ color: '#a3b18a' }}>Tema</p>
            <p className="text-xs font-bold text-white mt-0.5">{str(ejercicio.tema)}</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] uppercase tracking-wider font-extrabold" style={{ color: '#a3b18a' }}>Nivel</p>
            <p className="text-xs font-bold text-white mt-0.5">{str(ejercicio.nivel)}</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] uppercase tracking-wider font-extrabold" style={{ color: '#a3b18a' }}>Fecha</p>
            <p className="text-xs font-bold text-white mt-0.5">{fechaActual}</p>
          </div>
        </div>
      </div>

      {/* Instructions Box */}
      {ejercicio.instrucciones && (
        <div className="p-2.5 rounded-lg border" style={{ backgroundColor: COLOR.bgLight, borderColor: COLOR.cardBorder }}>
          <p className="text-[9px] uppercase tracking-wider font-bold mb-0.5" style={{ color: COLOR.textMuted }}>
            Instrucciones para el estudiante
          </p>
          <p className="text-xs leading-relaxed" style={{ color: COLOR.textMain }}>{str(ejercicio.instrucciones)}</p>
        </div>
      )}

      {/* List of Exercise Cards */}
      <div className="space-y-2.5">
        {ejercicios.map((ej, index) => (
          <div
            key={index}
            className="p-3 rounded-lg border transition-all"
            style={{
              backgroundColor: '#ffffff',
              borderColor: COLOR.cardBorder,
            }}
          >
            {/* Badge & Type Header */}
            <div className="flex items-center gap-1.5 mb-1.5">
              <span
                className="px-1.5 py-0.5 rounded text-[10px] font-bold text-white leading-none"
                style={{ backgroundColor: COLOR.accent }}
              >
                {ej.numero}
              </span>
              <span className="text-[9px] uppercase tracking-wider font-bold" style={{ color: COLOR.textMuted }}>
                {tipoLabels[ej.tipo] || str(ej.tipo)}
              </span>
            </div>

            {/* Enunciado */}
            <p className="text-xs font-bold leading-snug mb-2" style={{ color: COLOR.textMain }}>
              {str(ej.enunciado)}
            </p>

            {/* Opciones */}
            {safeArray(ej.opciones).length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-1.5">
                {ej.opciones.map((opcion, idx) => {
                  const esCorrecta = opcion.startsWith(ej.respuestaCorrecta);
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border transition-all"
                      style={{
                        backgroundColor: esCorrecta ? COLOR.successBg : COLOR.bgLight,
                        borderColor: esCorrecta ? COLOR.successBorder : COLOR.cardBorder,
                        color: COLOR.textMain,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: esCorrecta ? COLOR.successBorder : COLOR.textMuted }}
                      />
                      <span>{str(opcion)}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Respuesta correcta para V/F y Completar */}
            {safeArray(ej.opciones).length === 0 && ej.respuestaCorrecta && (
              <div
                className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border transition-all mb-1.5"
                style={{
                  backgroundColor: COLOR.successBg,
                  borderColor: COLOR.successBorder,
                  color: COLOR.textMain,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLOR.successBorder }}
                />
                <span>
                  {ej.tipo === 'verdadero_falso'
                    ? `Respuesta: ${str(ej.respuestaCorrecta)}`
                    : `Respuestas: ${str(ej.respuestaCorrecta)}`}
                </span>
              </div>
            )}

            {/* Explicación */}
            {ej.explicacion && (
              <div
                className="mt-2 p-2 rounded-md text-xs border"
                style={{ backgroundColor: COLOR.warnBg, borderColor: COLOR.warnBorder }}
              >
                <p className="font-bold text-[9px] uppercase tracking-wider mb-0.5" style={{ color: COLOR.warnText }}>
                  Explicación paso a paso
                </p>
                <p className="leading-snug text-[11px]" style={{ color: COLOR.textMain }}>{str(ej.explicacion)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};