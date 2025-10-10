import styled from 'styled-components';

interface TemperatureDisplayProps {
  temperature: number;
  condition: string;
  icon: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  flex-wrap: wrap;
  flex-shrink: 0;
`;

const TemperatureSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

const TempValue = styled.span`
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 700;
  line-height: 1;
  text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
  color: white;
`;

const TempUnit = styled.span`
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 400;
  margin-top: clamp(0.5rem, 1.5vw, 1rem);
  opacity: 0.8;
  color: white;
`;

const ConditionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.5rem, 1vh, 1rem);
`;

const WeatherIcon = styled.img`
  width: clamp(60px, 12vw, 120px);
  height: clamp(60px, 12vw, 120px);
  filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.3));
`;

const ConditionText = styled.h2`
  font-size: clamp(1.4rem, 3.5vw, 2.8rem);
  font-weight: 500;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  color: white;
`;

export function TemperatureDisplay({ temperature, condition, icon }: TemperatureDisplayProps) {
  const fahrenheit = Math.round((temperature * 9/5) + 32);

  return (
    <Container>
      <TemperatureSection>
        <TempValue>{fahrenheit}°</TempValue>
        <TempUnit>F</TempUnit>
      </TemperatureSection>
      <ConditionSection>
        <WeatherIcon src={`https:${icon}`} alt={condition} />
        <ConditionText>{condition}</ConditionText>
      </ConditionSection>
    </Container>
  );
}
