export interface WeatherData {
    temperature: number;
    feelsLike: number;
    condition: string;
    description: string;
    humidity: number;
    windSpeed: number;
    precipitation: number;
    icon: string;
    location: string;
    isDay: boolean;
    localTime: string;
}

export interface OutfitRecommendation {
    text: string;
    weatherSummary: string;
}

export interface AppState {
    weather: WeatherData | null;
    outfit: OutfitRecommendation | null;
    loading: boolean;
    error: string | null;
}