import { GoogleGenAI } from "@google/genai";
import type { WeatherData, OutfitRecommendation } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI({ apiKey: API_KEY });

export async function getOutfitRecommendation(weather: WeatherData): Promise<OutfitRecommendation> {
  try {
    const prompt = `You are a professional weather outfit advisor. Based on the weather conditions, provide practical clothing recommendations.

Weather conditions:
- Temperature: ${Math.round(weather.temperature)}°F
- Feels like: ${Math.round(weather.feelsLike)}°F
- Condition: ${weather.condition}
- Humidity: ${weather.humidity}%
- Wind: ${Math.round(weather.windSpeed)} km/h

Instructions:
- Provide ONLY 5-10 words maximum
- List specific clothing items separated by commas
- Be practical - focus on essential items for the weather
- Example format: "Jacket, sweater, warm pants, gloves, hat"
- Do NOT exceed 10 words
- Do NOT include explanations, humor, emojis, or extra words

Recommendation:`;

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
      weatherSummary: `${Math.round(weather.temperature)}°F, ${weather.condition}`
    };
  } catch (error) {
    console.error('Error getting outfit recommendation:', error);
    throw new Error('Failed to get outfit recommendation');
  }
}
