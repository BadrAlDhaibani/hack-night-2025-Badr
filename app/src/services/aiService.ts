import { GoogleGenAI } from "@google/genai";
import type { WeatherData, OutfitRecommendation } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI({ apiKey: API_KEY });

export async function getOutfitRecommendation(weather: WeatherData): Promise<OutfitRecommendation> {
  try {
    const prompt = `Weather: ${weather.temperature}°C, ${weather.condition}, feels like ${weather.feelsLike}°C.

Give a 1 sentence outfit recommendation. Only list the clothing items needed (e.g., "Light jacket, jeans, and sneakers" or "T-shirt and shorts"). No explanations.`;

    const result = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking for faster response
        },
      }
    });

    const text = result.text || '';

    return {
      text: text.trim(),
      weatherSummary: `${weather.temperature}°C, ${weather.condition}`
    };
  } catch (error) {
    console.error('Error getting outfit recommendation:', error);
    throw new Error('Failed to get outfit recommendation');
  }
}
