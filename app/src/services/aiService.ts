import { GoogleGenAI } from "@google/genai";
import type { WeatherData, OutfitRecommendation } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI({ apiKey: API_KEY });

export async function getOutfitRecommendation(weather: WeatherData): Promise<OutfitRecommendation> {
  try {
    const prompt = `You are a practical weather outfit advisor providing local clothing suggestions for everyday wear.

Weather conditions right now:
- Temperature: ${Math.round(weather.temperature)}°F (${Math.round((weather.temperature - 32) * 5/9)}°C)
- Feels like: ${Math.round(weather.feelsLike)}°F (${Math.round((weather.feelsLike - 32) * 5/9)}°C)
- Condition: ${weather.condition}
- Humidity: ${weather.humidity}%
- Wind: ${Math.round(weather.windSpeed)} km/h

Instructions:
- Suggest 5-8 practical clothing items appropriate for LOCAL daily wear
- List items separated by commas
- Choose realistic, everyday clothes someone would actually wear
- Consider temperature, humidity, and conditions together
- Example: "Light shirt, shorts, sunscreen, sneakers" OR "Sweater, jeans, light jacket, comfortable shoes"
- Do NOT suggest excessive winter gear for mild weather
- Do NOT include explanations, humor, emojis, or extra text

What to wear today:`;

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
