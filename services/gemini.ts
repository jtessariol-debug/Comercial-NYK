import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO } from '../types';

let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Error initializing Gemini client:", error);
}

const SYSTEM_INSTRUCTION = `
Eres un asistente virtual amable y profesional para "Comercial NYK".
Tu objetivo es ayudar a los clientes con información sobre el negocio.

Información Clave del Negocio:
- Experiencia: Contamos con más de 17 años de experiencia en el mercado.
- Teléfono: ${BUSINESS_INFO.phone}
- Enlace principal/WhatsApp: ${BUSINESS_INFO.link1}
- Catálogo: Tenemos un catálogo digital de abarrotes disponible directamente en esta página web, en la sección "Catálogo".
- Ubicación: ${BUSINESS_INFO.addressUrl}

Directrices:
1. Responde siempre en español de manera cortés.
2. Si preguntan por la fiabilidad, menciona nuestros 17 años de experiencia.
3. Si preguntan por productos o precios, invítalos a revisar la sección de "Catálogo" de la página web o contáctanos por WhatsApp.
4. Si el usuario quiere comprar o contactar, proporciona los enlaces y el teléfono inmediatamente.
5. Mantén las respuestas concisas (menos de 100 palabras si es posible).
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "Lo siento, el servicio de asistencia no está configurado correctamente en este momento (Falta API Key).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Lo siento, no pude generar una respuesta.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Hubo un error al procesar tu solicitud. Por favor intenta más tarde o contáctanos directamente por teléfono.";
  }
};