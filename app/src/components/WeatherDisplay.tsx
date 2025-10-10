import styled from 'styled-components';
import type { WeatherData, OutfitRecommendation as OutfitType } from '../types';
import { LocationHeader } from './LocationHeader';
import { TemperatureDisplay } from './TemperatureDisplay';
import { WeatherDetails } from './WeatherDetails';
import { OutfitRecommendation } from './OutfitRecommendation';

interface WeatherDisplayProps {
  weather: WeatherData;
  outfit: OutfitType;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: clamp(0.5rem, 2vh, 2rem) clamp(1rem, 3vw, 4rem);
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
`;

export function WeatherDisplay({ weather, outfit }: WeatherDisplayProps) {
  return (
    <Container>
      <LocationHeader location={weather.location} isDay={weather.isDay} />
      <TemperatureDisplay
        temperature={weather.temperature}
        condition={weather.condition}
        icon={weather.icon}
      />
      <WeatherDetails
        feelsLike={weather.feelsLike}
        humidity={weather.humidity}
        windSpeed={weather.windSpeed}
        precipitation={weather.precipitation}
      />
      <OutfitRecommendation text={outfit.text} />
    </Container>
  );
}
