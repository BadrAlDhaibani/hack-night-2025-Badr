import * as S from './TemperatureDisplayStyled';

interface TemperatureDisplayProps {
  temperature: number;
  feelsLike: number;
  condition: string;
  icon: string;
  units?: 'metric' | 'imperial';
}

export function TemperatureDisplay({ temperature, feelsLike, condition, icon, units = 'imperial' }: TemperatureDisplayProps) {
  const tempUnit = units === 'metric' ? 'C' : 'F';

  return (
    <S.Container>
      <S.TemperatureWrapper>
        <S.TemperatureSection>
          <S.TempValue>{Math.round(temperature)}°</S.TempValue>
          <S.TempUnit>{tempUnit}</S.TempUnit>
        </S.TemperatureSection>
        <S.FeelsLikeText>Feels like {Math.round(feelsLike)}°{tempUnit}</S.FeelsLikeText>
      </S.TemperatureWrapper>
      <S.ConditionSection>
        <S.WeatherIcon src={`https:${icon}`} alt={condition} />
        <S.ConditionText>{condition}</S.ConditionText>
      </S.ConditionSection>
    </S.Container>
  );
}
