import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

/* IDIOMAS */
export async function SpanishExerciseIA(mensaje) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Hola, muy buen día!!! Cómo estás?
        Necesito que te pongas en el papel de un profesor de español de ${mensaje.region} para extranjeros experimentado y generame ${mensaje.cantidad} ejercicios sobre ${mensaje.tema}. No es necesario que expliques el tema ni que hagas una presentación, ya que la idea es evaluar los conocimientos de los alumnos. Y, si es posible, no le agregues símbolos "#" ni "*"`,
    });
    const respuesta = response.text;
    return respuesta;
};

export async function ItalianExerciseIA(mensaje) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Hola, muy buen día!!! Cómo estás?
        Necesito que te pongas en el papel de un profesor de italiano de ${mensaje.region} muy experimentado y generame ${mensaje.cantidad} ejercicios sobre ${mensaje.tema}. No es necesario que expliques el tema ni que hagas una presentación, ya que la idea es evaluar los conocimientos de los alumnos. Y, si es posible, no le agregues símbolos "#" ni "*"`,
    });
    const respuesta = response.text;
    return respuesta;
};

/* MATERIAS DURAS */
export async function MathExerciseIA(mensaje) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Hola, muy buen día!!! Cómo estás?
        Necesito que te pongas en el papel de un profesor de matemáticas experimentado para personas de ${mensaje.grado} grado o curso, generame ${mensaje.cantidad} ejercicios sobre ${mensaje.tema}. No es necesario que expliques el tema ni que hagas una presentación, ya que la idea es evaluar los conocimientos de los alumnos. Y, si es posible, no le agregues símbolos "#" ni "*"`,
    });
    const respuesta = response.text;
    return respuesta;
};

export async function PhysicExerciseIA(mensaje) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Hola, muy buen día!!! Cómo estás?
        Necesito que te pongas en el papel de un profesor de física experimentado para personas de ${mensaje.grado} grado o curso, generame ${mensaje.cantidad} ejercicios sobre ${mensaje.tema}. No es necesario que expliques el tema ni que hagas una presentación, ya que la idea es evaluar los conocimientos de los alumnos. Y, si es posible, no le agregues símbolos "#" ni "*"`,
    });
    const respuesta = response.text;
    return respuesta;
};


/* INFORMÁTICA - TECNOLOGÍA */
export async function ProgrammingExerciseIA(mensaje) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Hola, muy buen día!!! Cómo estás?
        Necesito que te pongas en el papel de un profesor de programación de ${mensaje.lenguaje} experimentado y generame ${mensaje.cantidad} ejercicios sobre ${mensaje.tema}. No es necesario que expliques el tema ni que hagas una presentación, ya que la idea es evaluar los conocimientos de los alumnos. Y, si es posible, no le agregues símbolos "#" ni "*"`,
    });
    const respuesta = response.text;
    return respuesta;
};