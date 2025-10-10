import * as S from './TemperatureDisplayStyled';

interface TemperatureDisplayProps {
  temperature: number;
  feelsLike: number;
  condition: string;
  icon: string;
}

export function TemperatureDisplay({ temperature, feelsLike, condition, icon }: TemperatureDisplayProps) {
  return (
    <S.Container>
      <S.TemperatureWrapper>
        <S.TemperatureSection>
          <S.TempValue>{Math.round(temperature)}°</S.TempValue>
          <S.TempUnit>F</S.TempUnit>
        </S.TemperatureSection>
        <S.FeelsLikeText>Feels like {Math.round(feelsLike)}°F</S.FeelsLikeText>
      </S.TemperatureWrapper>
      <S.ConditionSection>
        <S.WeatherIcon src={`https:${icon}`} alt={condition} />
        <S.ConditionText>{condition}</S.ConditionText>
      </S.ConditionSection>
    </S.Container>
  );
}
