import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  flex-wrap: wrap;
  flex-shrink: 0;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const TemperatureSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const TempValue = styled.span`
  font-size: clamp(5rem, 12vw, 10rem);
  font-weight: 700;
  line-height: 1;
  text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
  color: white;
`;

export const TempUnit = styled.span`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  margin-top: clamp(0.5rem, 1.5vw, 1rem);
  opacity: 0.8;
  color: white;
`;

export const ConditionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.5rem, 1vh, 1rem);
`;

export const WeatherIcon = styled.img`
  width: clamp(70px, 12vw, 120px);
  height: clamp(70px, 12vw, 120px);
  filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.3));
`;

export const ConditionText = styled.h2`
  font-size: clamp(1.6rem, 3.5vw, 2.8rem);
  font-weight: 500;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  color: white;
`;

export const FeelsLikeText = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  white-space: nowrap;
`;
