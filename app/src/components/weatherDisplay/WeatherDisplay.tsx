import * as S from './WeatherDisplayStyled';
import type { WeatherData, OutfitRecommendation as OutfitType } from '../../types';
import { LocationHeader } from '../locationHeader/LocationHeader';
import { TemperatureDisplay } from '../temperatureDisplay/TemperatureDisplay';
import { WeatherDetails } from '../weatherDetails/WeatherDetails';
import { OutfitRecommendation } from '../outfitRecommendation/OutfitRecommendation';

interface WeatherDisplayProps {
  weather: WeatherData;
  outfit: OutfitType;
}

export function WeatherDisplay({ weather, outfit }: WeatherDisplayProps) {
  return (
    <S.Container>
      <LocationHeader location={weather.location} localTime={weather.localTime} />
      <TemperatureDisplay
        temperature={weather.temperature}
        feelsLike={weather.feelsLike}
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
    </S.Container>
  );
}
