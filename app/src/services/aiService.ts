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
- Provide ONLY a single sentence listing specific clothing items
- Be serious and practical - focus on comfort and protection from weather
- Consider temperature, condition, and wind when recommending layers
- Format: List items separated by commas (e.g., "Light jacket, t-shirt, and jeans")
- Do NOT include any explanations, humor, emojis, or extra commentary
- Do NOT include greetings or conclusions

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
