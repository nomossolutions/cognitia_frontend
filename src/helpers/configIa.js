const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const IA_MODEL = import.meta.env.VITE_IA_MODEL || 'gemini-2.5-flash';

const SYSTEM_PROMPT = `Eres un profesor experto y experimentado en diversas materias educativas. Genera ejercicios didácticos personalizados y devuelve SOLO un objeto JSON válido, sin Markdown ni texto extra.

Estructura exacta (respeta claves y tipos):
{
  "titulo": "",
  "materia": "",
  "tema": "",
  "nivel": "",
  "tipoEjercicio": "opcion_multiple",
  "instrucciones": "",
  "ejercicios": []
}

TIPOS DE EJERCICIOS Y SU ESTRUCTURA:

1. opcion_multiple:
{
  "numero": 1,
  "tipo": "opcion_multiple",
  "enunciado": "Pregunta o enunciado del ejercicio",
  "opciones": ["a) Opción correcta", "b) Opción incorrecta", "c) Opción incorrecta", "d) Opción incorrecta"],
  "respuestaCorrecta": "a",
  "explicacion": "Por qué la respuesta a es correcta"
}

2. verdadero_falso:
{
  "numero": 1,
  "tipo": "verdadero_falso",
  "enunciado": "Afirmación para evaluar",
  "respuestaCorrecta": "verdadero",
  "explicacion": "Por qué es verdadero o falso"
}
Valores válidos para respuestaCorrecta: "verdadero" o "falso"

3. completar:
{
  "numero": 1,
  "tipo": "completar",
  "enunciado": "La capital de Francia es ___ y la de Italia es ___",
  "respuestaCorrecta": "París, Roma",
  "explicacion": "Explicación de las respuestas"
}
Usa ___ para marcar los espacios en blanco.

4. respuesta_libre:
{
  "numero": 1,
  "tipo": "respuesta_libre",
  "enunciado": "Explica con tus palabras qué es la fotosíntesis",
  "respuestaEsperada": "La fotosíntesis es el proceso mediante el cual las plantas...",
  "explicacion": "Criterios de evaluación esperados"
}

CRITERIOS DE DISEÑO PARA ALTA CALIDAD:
- Enunciados claros, precisos y contextualizados al nivel del alumno.
- Respuesta correcta siempre consistente con la explicación.
- Explicación breve pero completa: indica por qué la respuesta es correcta.
- Respetar el nivel educativo indicado (primaria, secundaria, universitario).
- Usar lenguaje apropiado para la región/idioma especificado.
- No usar símbolos "#" ni "*" en el texto.
- "ejercicios" debe contener EXACTAMENTE la cantidad pedida.
- Cada ejercicio DEBE tener el campo "tipo" coincidiendo con tipoEjercicio.
- Tono profesional, claro y motivador. Responde únicamente con el JSON.`;

const buildUserPrompt = (m) => `Materia: ${m.materia || m.region || 'General'}
Tema: ${m.tema}
Nivel: ${m.grado || m.nivel || 'No especificado'}
Cantidad de ejercicios: ${m.cantidad}
Tipo de ejercicio: ${m.tipoEjercicio || 'opcion_multiple'}
${m.region ? `Región/Idioma: ${m.region}` : ''}
${m.lenguaje ? `Lenguaje de programación: ${m.lenguaje}` : ''}
Genera los ejercicios con la estructura JSON indicada para el tipo de ejercicio especificado.`;

const cleanJsonResponse = (text) => {
    if (!text) return '';
    return text
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim();
};

const fetchGemini = async (userPrompt) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${IA_MODEL}:generateContent?key=${GEMINI_KEY}`;

    const body = {
        systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
        },
        contents: [
            {
                role: 'user',
                parts: [{ text: userPrompt }],
            },
        ],
        generationConfig: {
            temperature: 0.4,
            responseMimeType: 'application/json',
            maxOutputTokens: 4096,
        },
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('Error de Gemini:', data);
        throw new Error(
            data?.error?.message ||
            `Error ${response.status}: No se pudieron generar los ejercicios`
        );
    }

    const rawContent = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawContent) {
        throw new Error('Gemini no devolvió contenido.');
    }

    const cleanedContent = cleanJsonResponse(rawContent);

    let resultado;
    try {
        resultado = JSON.parse(cleanedContent);
    } catch (parseError) {
        console.error('Respuesta recibida de Gemini:', rawContent);
        console.error('Error parseando JSON:', parseError);
        throw new Error(
            'Gemini devolvió una respuesta que no tiene un formato JSON válido.'
        );
    }

    if (!resultado || typeof resultado !== 'object') {
        throw new Error('La respuesta generada no tiene un formato válido.');
    }

    if (!Array.isArray(resultado.ejercicios)) {
        resultado.ejercicios = [];
    }

    return resultado;
};

/* IDIOMAS */
export async function SpanishExerciseIA(mensaje) {
    return fetchGemini(buildUserPrompt({
        materia: `Español de ${mensaje.region}`,
        tema: mensaje.tema,
        nivel: mensaje.grado || 'No especificado',
        cantidad: mensaje.cantidad,
        tipoEjercicio: mensaje.tipoEjercicio,
        region: mensaje.region,
    }));
}

export async function ItalianExerciseIA(mensaje) {
    return fetchGemini(buildUserPrompt({
        materia: `Italiano de ${mensaje.region}`,
        tema: mensaje.tema,
        nivel: mensaje.grado || 'No especificado',
        cantidad: mensaje.cantidad,
        tipoEjercicio: mensaje.tipoEjercicio,
        region: mensaje.region,
    }));
}

/* MATERIAS DURAS */
export async function MathExerciseIA(mensaje) {
    return fetchGemini(buildUserPrompt({
        materia: 'Matemáticas',
        tema: mensaje.tema,
        grado: mensaje.grado,
        cantidad: mensaje.cantidad,
        tipoEjercicio: mensaje.tipoEjercicio,
    }));
}

export async function PhysicExerciseIA(mensaje) {
    return fetchGemini(buildUserPrompt({
        materia: 'Física',
        tema: mensaje.tema,
        grado: mensaje.grado,
        cantidad: mensaje.cantidad,
        tipoEjercicio: mensaje.tipoEjercicio,
    }));
}

/* INFORMÁTICA - TECNOLOGÍA */
export async function ProgrammingExerciseIA(mensaje) {
    return fetchGemini(buildUserPrompt({
        materia: `Programación en ${mensaje.lenguaje}`,
        tema: mensaje.tema,
        nivel: mensaje.grado || 'No especificado',
        cantidad: mensaje.cantidad,
        tipoEjercicio: mensaje.tipoEjercicio,
        lenguaje: mensaje.lenguaje,
    }));
}
