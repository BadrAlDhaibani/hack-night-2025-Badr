import * as S from './WeatherDisplayStyled';
import type { WeatherData, OutfitRecommendation as OutfitType } from '../../types';
import { LocationHeader } from '../locationHeader/LocationHeader';
import { TemperatureDisplay } from '../temperatureDisplay/TemperatureDisplay';
import { WeatherDetails } from '../weatherDetails/WeatherDetails';
import { OutfitRecommendation } from '../outfitRecommendation/OutfitRecommendation';
import humidityIcon from '../../assets/humidity-svgrepo-com.svg';

interface WeatherDisplayProps {
  weather: WeatherData;
  outfit: OutfitType;
  lastUpdate: Date;
}

export function WeatherDisplay({ weather, outfit, lastUpdate }: WeatherDisplayProps) {
  const formatUpdateTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <S.Container>
      <S.Logo>
        <S.LogoIcon src={humidityIcon} alt="WeatherFit" />
        <S.LogoText>WeatherFit</S.LogoText>
      </S.Logo>
      <LocationHeader location={weather.location} localTime={weather.localTime} />
      <TemperatureDisplay
        temperature={weather.temperature}
        feelsLike={weather.feelsLike}
        condition={weather.condition}
        icon={weather.icon}
      />
      <WeatherDetails
        humidity={weather.humidity}
        windSpeed={weather.windSpeed}
        precipitation={weather.precipitation}
      />
      <OutfitRecommendation text={outfit.text} />
      <S.Footer>
        Updates every 5 minutes • Last updated at {formatUpdateTime(lastUpdate)}
      </S.Footer>
    </S.Container>
  );
}
