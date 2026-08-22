# Propuestas de Características Premium para Cognitia Education

Este documento detalla sugerencias de funcionalidades y mejoras de experiencia de usuario (UX) diseñadas para transformar a **Cognitia Education** en una plataforma SaaS de nivel Premium.

---

## 1. 🖨️ "Versión Estudiante" vs "Versión Docente" (Solucionario Inteligente)
Esta es la característica más crítica para el uso práctico diario de un docente en el aula. Actualmente, los PDF e interactivos se generan con respuestas y explicaciones de forma obligatoria.

### 💡 Propuesta
Implementar un switch o toggle interactivo tanto en la vista previa web como en la descarga de PDF para cambiar entre:
* **Versión Estudiante (Clean Worksheet):**
  * Oculta las respuestas correctas y las explicaciones de cada ejercicio.
  * Reestructura el espaciado para que quede espacio físico de escritura (ej. líneas punteadas `______` o áreas en blanco de respuesta) para que el alumno complete.
* **Versión Docente (Answer Key):**
  * Conserva las respuestas correctas y las explicaciones didácticas paso a paso tal como funciona actualmente.

### 🔧 Ruta de Implementación en el Código
1. **Estado Compartido:** En `ExercisePage.jsx`, agregar un estado booleano para controlar el toggle:
   ```jsx
   const [showAnswers, setShowAnswers] = useState(false);
   ```
2. **Propiedades del PDF:** Pasar `showAnswers` al generador de PDF:
   ```jsx
   <PDFDownloadLink ejercicio={ejercicios} showAnswers={showAnswers} ... />
   <PDFContent ejercicio={ejercicios} showAnswers={showAnswers} ... />
   ```
3. **Modificación de Componentes de PDF (`pdf.jsx`):**
   * En `ExerciseDocument`, recibir la prop `showAnswers`.
   * Condicionar el renderizado de la explicación:
     ```jsx
     {showAnswers && ejercicio.explicacion && (
       <View style={pdfStyles.explicacionBox}>...</View>
     )}
     ```
   * Modificar el estilo de las opciones en caso de que `!showAnswers`:
     ```jsx
     const esCorrecta = opcion.startsWith(ejercicio.respuestaCorrecta);
     const destacarOption = showAnswers && esCorrecta;
     return (
       <View style={[pdfStyles.opcionBox, destacarOption && pdfStyles.opcionBoxCorrecta]}>
         <Text style={pdfStyles.opcionText}>{str(opcion)}</Text>
       </View>
     );
     ```

---

## 2. 🪄 Editor Interactivo con IA (Modificación por Pregunta)
El flujo actual es de "todo o nada". Si al docente le encantan 9 de las 10 preguntas generadas pero quiere cambiar solo una, se ve obligado a volver a generar todo de cero.

### 💡 Propuesta
Hacer que la lista de ejercicios generada sea interactiva antes de exportar a PDF:
* **Edición Directa (Inline Editing):** Permitir al docente hacer doble clic sobre cualquier enunciado o instrucción para corregirlo manualmente al instante como un campo de texto editable.
* **Regeneración de Pregunta Única con IA:** Agregar un botón de "varita mágica" al lado de cada tarjeta de ejercicio. Al hacer clic, ofrece un menú rápido:
  * *"Regenerar este ejercicio"* (cambiarlo por otro equivalente).
  * *"Aumentar dificultad / Disminuir dificultad"* para este ejercicio específico.

### 🔧 Ruta de Implementación en el Código
1. **Mutar el Estado Local:** Cambiar la visualización estática de `ejercicios` a interactiva.
2. **Componente de Entrada:** En `ExerciseViewer` (`pdf.jsx`), convertir el texto del enunciado en un `textarea` o un `input` sin bordes y estilizado cuando el usuario haga foco sobre él, sincronizando la edición con el estado `ejercicios`.
3. **Punto de API IA Individual:** Agregar una nueva función auxiliar en `configIa.js` llamada `regenerateSingleExercise(materia, tema, nivel, ejercicioAnterior, tipoCambio)`. Esta función hará un prompt más corto a Gemini para pedir una sola pregunta estructurada en JSON que reemplace a la actual en la posición seleccionada del array `ejercicios`.

---

## 3. 🎨 Personalización de Marca y Plantillas de Impresión
Los docentes tienen diferentes necesidades de impresión y pertenencia institucional. Una versión premium debe verse profesional y adaptarse al presupuesto de recursos de las escuelas.

### 💡 Propuesta
1. **Encabezado Institucional:** Agregar campos opcionales en el panel lateral de configuración:
   * *Nombre del Colegio / Institución*
   * *Nombre del Docente*
   * *Curso / Sección / Grado*
   * Al completarse, estos datos se colocan en un membrete elegante en la parte superior del PDF ("Profesor: Dr. Pérez | Colegio San José").
2. **Plantillas de Estilo para el PDF (Temas):**
   * **Tema Cognitia (Default):** Diseño actual con colores vibrantes naranja/verde.
   * **Tema Ahorro de Tinta / Eco-Friendly:** Tipografía monocromática limpia, sin fondos grises ni bloques oscuros, para no desgastar los cartuchos de fotocopiadora de las escuelas.
   * **Tema Infantil (Primaria):** Fuentes más grandes, mayor espaciado de renglones y cuadros más amigables.

### 🔧 Ruta de Implementación en el Código
1. **Nuevos Inputs:** Agregar campos opcionales en `ExercisePage.jsx` dentro del formulario del sidebar (`colegio`, `docente`, `curso`).
2. **Propagar Datos:** Enviar estos parámetros como un objeto de metadatos del encabezado al documento del PDF (`ExerciseDocument`).
3. **Definición de Estilos Dinámicos:** En `pdf.jsx`, mapear un objeto de estilos dinámicos de `@react-pdf/renderer` de acuerdo a la plantilla seleccionada por el usuario (por ejemplo, removiendo `backgroundColor: COLOR.darkest` para el tema de ahorro de tinta y reemplazándolo por líneas finas negras).

---

## 4. 🧠 Enfoque Pedagógico Avanzado (Taxonomía de Bloom)
Para posicionar a Cognitia como una herramienta experta y pedagógicamente válida para universidades y colegios exigentes.

### 💡 Propuesta
Agregar un selector avanzado en la barra lateral llamado **"Objetivo Cognitivo / Enfoque Pedagógico"** basado en la Taxonomía de Bloom:
* *Recordar y Comprender:* Ejercicios directos de conceptos, definiciones, opción múltiple fáctica.
* *Aplicar y Analizar:* Preguntas de resolución de problemas, análisis de código, casos de estudio contextualizados.
* *Evaluar y Crear:* Ensayos libres de reflexión crítica, formulación de hipótesis o problemas de diseño lógico.

### 🔧 Ruta de Implementación en el Código
1. **Selector Visual:** Añadir un dropdown estilizado en el sidebar de configuración.
2. **Prompt Dinámico:** Añadir este valor al prompt de usuario en `buildUserPrompt` (`configIa.js`):
   ```javascript
   ${m.enfoquePedagogico ? `Enfoque pedagógico (Taxonomía de Bloom): ${m.enfoquePedagogico}` : ''}
   ```
   Y expandir las instrucciones de diseño del sistema (`SYSTEM_PROMPT`) para que expliquen a Gemini qué tipo de preguntas formular para cada nivel cognitivo de Bloom.

---

*Estas sugerencias están listas para ser planificadas y codificadas a fin de entregar un software de alto impacto pedagógico y comercial.*
