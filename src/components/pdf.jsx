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

const str = (value) =>
  value === undefined || value === null || value === ""
    ? "-"
    : String(value);

/* ============================================================
    ESTILOS COGNITIA (VERDES + NARANJAS)
============================================================ */

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 48,
    paddingHorizontal: 36,
    fontSize: 9,
    color: "#3a5a40",
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomWidth: 2,
    borderBottomColor: "#e76f51",
    paddingBottom: 14,
    marginBottom: 16,
  },
  brand: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#e76f51",
    letterSpacing: 2.5,
    textTransform: "uppercase",
    marginBottom: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#344e41",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 10,
    color: "#588157",
    marginTop: 2,
  },
  headerRight: {
    textAlign: "right",
    backgroundColor: "#f8f9f7",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#dad7cd",
  },
  headerRightLabel: {
    fontSize: 7,
    fontWeight: "bold",
    color: "#588157",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  headerRightValue: {
    fontSize: 9,
    fontWeight: "semibold",
    color: "#344e41",
  },

  /* HERO CARD */
  heroCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#344e41",
    borderRadius: 8,
  },
  heroLabel: {
    fontSize: 7.5,
    color: "#e76f51",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  heroTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 2,
  },
  heroInfo: {
    flexDirection: "row",
    gap: 16,
    textAlign: "right",
  },
  infoLabel: {
    fontSize: 7,
    color: "#a3b18a",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  infoValue: {
    marginTop: 2,
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#f8f9f7",
  },

  /* SECCIONES Y TITULOS */
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#344e41",
    textTransform: "uppercase",
    letterSpacing: 1,
    paddingBottom: 4,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dad7cd",
  },

  /* INSTRUCCIONES */
  instruccionesBox: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "#f8f9f7",
    borderColor: "#dad7cd",
    marginBottom: 16,
  },
  instruccionesLabel: {
    fontSize: 7.5,
    fontWeight: "bold",
    color: "#588157",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  instruccionesText: {
    fontSize: 9,
    lineHeight: 1.45,
    color: "#3a5a40",
  },

  /* EJERCICIO CARD */
  ejercicioCard: {
    marginBottom: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e76f51",
    backgroundColor: "#ffffff",
    borderLeftWidth: 4,
    borderLeftColor: "#e76f51",
  },
  ejercicioHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  ejercicioNumero: {
    backgroundColor: "#e76f51",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  ejercicioTipo: {
    fontSize: 7,
    color: "#588157",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  ejercicioEnunciado: {
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#344e41",
    marginBottom: 8,
    lineHeight: 1.4,
  },

  /* OPCIONES */
  opcionesContainer: {
    marginBottom: 8,
  },
  opcionItem: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 3,
    fontSize: 9,
    color: "#3a5a40",
  },
  opcionBullet: {
    color: "#f4a261",
    fontWeight: "bold",
  },
  opcionCorrecta: {
    backgroundColor: "#f0fdf4",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
  },

  /* RESPUESTA Y EXPLICACION */
  respuestaBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#f0fdf4",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#a3b18a",
  },
  respuestaLabel: {
    fontSize: 7.5,
    fontWeight: "bold",
    color: "#588157",
    textTransform: "uppercase",
  },
  respuestaValue: {
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#344e41",
  },
  explicacionBox: {
    marginTop: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#fff7ed",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#fed7aa",
  },
  explicacionLabel: {
    fontSize: 7.5,
    fontWeight: "bold",
    color: "#c2410c",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  explicacionText: {
    fontSize: 8.5,
    lineHeight: 1.4,
    color: "#334155",
  },

  /* FOOTER */
  footer: {
    position: "absolute",
    bottom: 20,
    left: 36,
    right: 36,
    borderTopWidth: 1,
    borderTopColor: "#dad7cd",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#a3b18a",
    fontSize: 7.5,
  },
  footerBrand: {
    fontWeight: "bold",
    color: "#588157",
    letterSpacing: 1,
  },
});

/* ============================================================
    COMPONENTES AUXILIARES
============================================================ */

const InfoBlock = ({ label, value }) => (
  <View>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{str(value)}</Text>
  </View>
);

/* ============================================================
    BLOQUE DE EJERCICIO
============================================================ */

const EjercicioCard = ({ ejercicio }) => (
  <View style={styles.ejercicioCard} wrap={false}>
    <View style={styles.ejercicioHeader}>
      <Text style={styles.ejercicioNumero}>{str(ejercicio.numero)}</Text>
      <Text style={styles.ejercicioTipo}>
        {str(ejercicio.tipo || "opcion_multiple")}
      </Text>
    </View>
    <Text style={styles.ejercicioEnunciado}>{str(ejercicio.enunciado)}</Text>

    {safeArray(ejercicio.opciones).length > 0 && (
      <View style={styles.opcionesContainer}>
        {ejercicio.opciones.map((opcion, idx) => {
          const esCorrecta = opcion.startsWith(ejercicio.respuestaCorrecta);
          return (
            <View
              key={idx}
              style={[
                styles.opcionItem,
                esCorrecta && styles.opcionCorrecta,
              ]}
            >
              <Text style={styles.opcionBullet}>•</Text>
              <Text>{str(opcion)}</Text>
            </View>
          );
        })}
      </View>
    )}

    {ejercicio.respuestaCorrecta && (
      <View style={styles.respuestaBox}>
        <Text style={styles.respuestaLabel}>Respuesta:</Text>
        <Text style={styles.respuestaValue}>
          {str(ejercicio.respuestaCorrecta)}
        </Text>
      </View>
    )}

    {ejercicio.explicacion && (
      <View style={styles.explicacionBox}>
        <Text style={styles.explicacionLabel}>Explicación</Text>
        <Text style={styles.explicacionText}>{str(ejercicio.explicacion)}</Text>
      </View>
    )}
  </View>
);

/* ============================================================
    DOCUMENTO PDF
============================================================ */

export const ExerciseDocument = ({ ejercicio, titulo = "Ejercicios" }) => {
  if (!ejercicio) return null;

  const ejercicios = safeArray(ejercicio.ejercicios);

  return (
    <Document title={`${titulo} - Cognitia`}>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>COGNITIA</Text>
            <Text style={styles.title}>{str(ejercicio.titulo || titulo)}</Text>
            <Text style={styles.subtitle}>Ejercicios generados con IA</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerRightLabel}>FECHA</Text>
            <Text style={styles.headerRightValue}>{fechaActual}</Text>
          </View>
        </View>

        {/* HERO CARD */}
        <View style={styles.heroCard}>
          <View>
            <Text style={styles.heroLabel}>Materia</Text>
            <Text style={styles.heroTitle}>{str(ejercicio.materia)}</Text>
          </View>
          <View style={styles.heroInfo}>
            <InfoBlock label="Tema" value={ejercicio.tema} />
            <InfoBlock label="Nivel" value={ejercicio.nivel} />
            <InfoBlock label="Cantidad" value={ejercicios.length} />
          </View>
        </View>

        {/* INSTRUCCIONES */}
        {ejercicio.instrucciones && (
          <View style={styles.instruccionesBox} wrap={false}>
            <Text style={styles.instruccionesLabel}>Instrucciones</Text>
            <Text style={styles.instruccionesText}>
              {str(ejercicio.instrucciones)}
            </Text>
          </View>
        )}

        {/* EJERCICIOS */}
        {ejercicios.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ejercicios</Text>
            {ejercicios.map((ej, index) => (
              <EjercicioCard key={index} ejercicio={ej} />
            ))}
          </View>
        )}

        {/* FOOTER */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerBrand}>COGNITIA</Text>
          <Text>© 2026 Cognitia - Ejercicios generados con IA</Text>
        </View>
      </Page>
    </Document>
  );
};

/* ============================================================
    VISTA PREVIA (PDFViewer)
============================================================ */

export const PDFContent = ({
  ejercicio,
  titulo = "Ejercicios",
  preview = false,
}) => {
  if (!ejercicio) return null;

  return (
    <PDFViewer
      showToolbar={false}
      style={{
        width: "100%",
        height: preview ? "100%" : 500,
        border: "none",
        borderRadius: 8,
      }}
    >
      <ExerciseDocument ejercicio={ejercicio} titulo={titulo} />
    </PDFViewer>
  );
};

/* ============================================================
    DESCARGAR PDF
============================================================ */

export const PDFDownloadLink = ({
  ejercicio,
  titulo = "Ejercicios",
  className = "",
}) => {
  if (!ejercicio) return null;

  const safeTitulo = (titulo || "Ejercicios")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9_-]/g, "");

  const formattedDate = new Date().toISOString().split("T")[0];

  return (
    <PDFDownloadLinkBase
      document={<ExerciseDocument ejercicio={ejercicio} titulo={titulo} />}
      fileName={`${safeTitulo}_${formattedDate}.pdf`}
      className={`flex items-center gap-2 bg-[#e76f51] hover:bg-[#d35a3e] text-white font-bold py-2 px-4 rounded-lg transition-colors ${className}`}
    >
      <span className="text-sm">Descargar PDF</span>
    </PDFDownloadLinkBase>
  );
};

/* ============================================================
    VISUALIZADOR WEB DE EJERCICIOS (JSON)
============================================================ */

const tipoLabels = {
  opcion_multiple: 'Opción Múltiple',
  verdadero_falso: 'Verdadero o Falso',
  completar: 'Completar',
  respuesta_libre: 'Respuesta Libre',
};

const ExerciseContent = ({ ejercicio: ej }) => {
  if (!ej) return null;

  // OPCIÓN MÚLTIPLE
  if (ej.tipo === 'opcion_multiple') {
    return (
      <>
        {safeArray(ej.opciones).length > 0 && (
          <div className="space-y-1 mb-3">
            {ej.opciones.map((opcion, idx) => {
              const esCorrecta = opcion.startsWith(ej.respuestaCorrecta);
              return (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-sm px-2 py-1 rounded"
                  style={{
                    backgroundColor: esCorrecta ? '#f0fdf4' : 'transparent',
                    color: '#3a5a40',
                  }}
                >
                  <span style={{ color: '#f4a261' }}>•</span>
                  <span>{str(opcion)}</span>
                </div>
              );
            })}
          </div>
        )}
        {ej.respuestaCorrecta && (
          <div
            className="flex items-center gap-2 px-3 py-2 rounded text-sm mb-2"
            style={{ backgroundColor: '#f0fdf4', border: '1px solid #a3b18a' }}
          >
            <span className="font-bold" style={{ color: '#588157' }}>Respuesta:</span>
            <span className="font-bold" style={{ color: '#344e41' }}>{str(ej.respuestaCorrecta)}</span>
          </div>
        )}
      </>
    );
  }

  // VERDADERO O FALSO
  if (ej.tipo === 'verdadero_falso') {
    const esVerdadero = ej.respuestaCorrecta?.toLowerCase() === 'verdadero';
    return (
      <div className="flex gap-3 mb-3">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold"
          style={{
            backgroundColor: esVerdadero ? '#f0fdf4' : '#f8f9f7',
            border: `2px solid ${esVerdadero ? '#22c55e' : '#dad7cd'}`,
            color: esVerdadero ? '#166534' : '#6b7280',
          }}
        >
          ✅ Verdadero
        </div>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold"
          style={{
            backgroundColor: !esVerdadero ? '#fef2f2' : '#f8f9f7',
            border: `2px solid ${!esVerdadero ? '#ef4444' : '#dad7cd'}`,
            color: !esVerdadero ? '#991b1b' : '#6b7280',
          }}
        >
          ❌ Falso
        </div>
      </div>
    );
  }

  // COMPLETAR
  if (ej.tipo === 'completar') {
    return (
      <div
        className="px-3 py-2 rounded text-sm mb-2"
        style={{ backgroundColor: '#f0fdf4', border: '1px solid #a3b18a' }}
      >
        <span className="font-bold" style={{ color: '#588157' }}>Respuesta: </span>
        <span className="font-bold" style={{ color: '#344e41' }}>{str(ej.respuestaCorrecta)}</span>
      </div>
    );
  }

  // RESPUESTA LIBRE
  if (ej.tipo === 'respuesta_libre') {
    return (
      <div
        className="px-3 py-2 rounded text-sm mb-2"
        style={{ backgroundColor: '#eff6ff', border: '1px solid #93c5fd' }}
      >
        <p className="font-bold text-xs uppercase mb-1" style={{ color: '#1d4ed8' }}>Respuesta esperada</p>
        <p style={{ color: '#1e3a5f' }}>{str(ej.respuestaEsperada)}</p>
      </div>
    );
  }

  return null;
};

export const ExerciseViewer = ({ ejercicio }) => {
  if (!ejercicio) return null;

  const ejercicios = safeArray(ejercicio.ejercicios);

  return (
    <div className="space-y-4">
      {/* Header info */}
      <div className="p-4 rounded-lg" style={{ backgroundColor: '#344e41' }}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold" style={{ color: '#e76f51' }}>
              {str(ejercicio.materia)}
            </p>
            <h3 className="text-lg font-bold text-white mt-1">{str(ejercicio.titulo)}</h3>
          </div>
          <div className="flex gap-4 text-right">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold" style={{ color: '#a3b18a' }}>Tema</p>
              <p className="text-sm font-bold text-white">{str(ejercicio.tema)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold" style={{ color: '#a3b18a' }}>Nivel</p>
              <p className="text-sm font-bold text-white">{str(ejercicio.nivel)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold" style={{ color: '#a3b18a' }}>Tipo</p>
              <p className="text-sm font-bold text-white">{tipoLabels[ejercicio.tipoEjercicio] || 'Opción Múltiple'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instrucciones */}
      {ejercicio.instrucciones && (
        <div className="p-4 rounded-lg border" style={{ backgroundColor: '#f8f9f7', borderColor: '#dad7cd' }}>
          <p className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: '#588157' }}>
            Instrucciones
          </p>
          <p className="text-sm" style={{ color: '#3a5a40' }}>{str(ejercicio.instrucciones)}</p>
        </div>
      )}

      {/* Ejercicios */}
      {ejercicios.map((ej, index) => (
        <div
          key={index}
          className="p-4 rounded-lg border-l-4"
          style={{
            backgroundColor: '#ffffff',
            borderColor: '#e76f51',
            border: '1px solid #e76f51',
            borderLeftWidth: '4px',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="px-2 py-1 rounded text-xs font-bold text-white"
              style={{ backgroundColor: '#e76f51' }}
            >
              {ej.numero}
            </span>
            <span className="text-xs uppercase tracking-widest font-bold" style={{ color: '#588157' }}>
              {tipoLabels[ej.tipo] || str(ej.tipo)}
            </span>
          </div>
          
          <p className="text-sm font-bold mb-3" style={{ color: '#344e41' }}>
            {str(ej.enunciado)}
          </p>

          <ExerciseContent ejercicio={ej} />

          {ej.explicacion && (
            <div
              className="px-3 py-2 rounded text-sm"
              style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa' }}
            >
              <p className="font-bold text-xs uppercase mb-1" style={{ color: '#c2410c' }}>Explicación</p>
              <p style={{ color: '#334155' }}>{str(ej.explicacion)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
