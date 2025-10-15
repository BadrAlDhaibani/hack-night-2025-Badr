import * as S from './WeatherDisplayStyled';
import type { WeatherData, OutfitRecommendation as OutfitType } from '../../types';
import { LocationHeader } from '../locationHeader/LocationHeader';
import { TemperatureDisplay } from '../temperatureDisplay/TemperatureDisplay';
import { WeatherDetails } from '../weatherDetails/WeatherDetails';
import { OutfitRecommendation } from '../outfitRecommendation/OutfitRecommendation';
import { AdminMenu } from '../adminMenu/AdminMenu';
import humidityIcon from '../../assets/humidity-svgrepo-com.svg';

interface WeatherDisplayProps {
  weather: WeatherData;
  outfit: OutfitType;
  lastUpdate: Date;
  currentLocation: string;
  currentUnits: 'metric' | 'imperial';
  onSettingsChange: (location: string, units: 'metric' | 'imperial') => void;
}

export function WeatherDisplay({
  weather,
  outfit,
  lastUpdate,
  currentLocation,
  currentUnits,
  onSettingsChange
}: WeatherDisplayProps) {
  const formatUpdateTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <S.Container>
      <S.Header>
        <S.Logo>
          <S.LogoIcon src={humidityIcon} alt="WthrFit" />
          <S.LogoText>WthrFit</S.LogoText>
        </S.Logo>
        <AdminMenu
          currentLocation={currentLocation}
          currentUnits={currentUnits}
          onApply={onSettingsChange}
        />
      </S.Header>
      <LocationHeader location={weather.location} localTime={weather.localTime} />
      <TemperatureDisplay
        temperature={weather.temperature}
        feelsLike={weather.feelsLike}
        condition={weather.condition}
        icon={weather.icon}
        units={currentUnits}
      />
      <WeatherDetails
        humidity={weather.humidity}
        windSpeed={weather.windSpeed}
        precipitation={weather.precipitation}
        units={currentUnits}
      />
      <OutfitRecommendation text={outfit.text} />
      <S.Footer>
        <span className="hide-mobile">Updates every 5 minutes • </span>Last updated at {formatUpdateTime(lastUpdate)}
      </S.Footer>
    </S.Container>
  );
}
