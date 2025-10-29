import { GoogleGenAI } from "@google/genai";
import type { WeatherData, OutfitRecommendation } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI({ apiKey: API_KEY });

export async function getOutfitRecommendation(weather: WeatherData): Promise<OutfitRecommendation> {
  try {
    const celsius = Math.round((weather.temperature - 32) * 5 / 9);

    const prompt = `You are a clothing recommendation assistant. Your job is to suggest what someone should wear TODAY based ONLY on current weather conditions. You are advising a local resident, not a tourist.

CURRENT WEATHER:
Temperature: ${celsius}°C (${Math.round(weather.temperature)}°F)
Feels like: ${Math.round((weather.feelsLike - 32) * 5 / 9)}°C
Condition: ${weather.condition}
Humidity: ${weather.humidity}%
Wind: ${Math.round(weather.windSpeed)} km/h

STRICT RULES - FOLLOW THESE EXACTLY:
1. Suggest ONLY 4-6 clothing items (not more, not less)
2. List items separated by commas with no periods or extra text
3. Temperature guidelines:
   - Below 0°C: Winter coat, thermal layers, boots, gloves, hat required
   - 0-10°C: Warm coat, sweater, long pants, boots required
   - 10-15°C: Sweater or light jacket, long pants, shoes required
   - 15-20°C: Long sleeve shirt or sweater, jeans, shoes, possibly light jacket
   - 20-25°C: T-shirt or light shirt, shorts or jeans, shoes (NO heavy jackets)
   - 25-30°C: Light t-shirt, shorts, sandals or sneakers (NO layers)
   - Above 30°C: Very light clothing, shorts, hat if sunny, sandals (NEVER suggest jackets or warm clothes)
4. If RAINY: Add umbrella or waterproof jacket
5. If SUNNY/HOT: Add sunglasses, hat, or sunscreen (not warm clothes)
6. If SNOWY: Add winter boots, gloves, hat (mandatory)
7. DO NOT suggest multiple layers when temperature is warm
8. DO NOT suggest heavy winter gear for mild/warm weather
9. Return ONLY the clothing items, nothing else

Example responses:
- "T-shirt, shorts, sneakers, sunglasses, hat"
- "Sweater, jeans, light jacket, comfortable shoes"
- "Light shirt, shorts, sandals, umbrella"

Recommended items:`;

    const result = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
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
