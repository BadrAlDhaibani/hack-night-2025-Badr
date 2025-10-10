import * as S from './TemperatureDisplayStyled';

interface TemperatureDisplayProps {
  temperature: number;
  feelsLike: number;
  condition: string;
  icon: string;
}

export function TemperatureDisplay({ temperature, feelsLike, condition, icon }: TemperatureDisplayProps) {
  const fahrenheit = Math.round((temperature * 9/5) + 32);
  const feelsLikeFahrenheit = Math.round((feelsLike * 9/5) + 32);

  return (
    <S.Container>
      <S.TemperatureWrapper>
        <S.TemperatureSection>
          <S.TempValue>{fahrenheit}°</S.TempValue>
          <S.TempUnit>F</S.TempUnit>
        </S.TemperatureSection>
        <S.FeelsLikeText>Feels like {feelsLikeFahrenheit}°F</S.FeelsLikeText>
      </S.TemperatureWrapper>
      <S.ConditionSection>
        <S.WeatherIcon src={`https:${icon}`} alt={condition} />
        <S.ConditionText>{condition}</S.ConditionText>
      </S.ConditionSection>
    </S.Container>
  );
}
