import styled from 'styled-components';

/**
 * Temperature Display Styled Components
 * Shows the current temperature, feels-like temp, weather icon, and condition
 */

/** Main flex container for temperature and weather condition */
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacing-unit) * 4);
  flex-wrap: wrap;
  flex-shrink: 0;

  @media (min-width: 768px) {
    gap: calc(var(--spacing-unit) * 6);
  }

  @media (min-width: 1366px) {
    gap: calc(var(--spacing-unit) * 8);
  }
`;

/** Wrapper for temperature value and feels-like text */
export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--spacing-unit) * 1);

  @media (min-width: 768px) {
    gap: calc(var(--spacing-unit) * 2);
  }
`;

/** Container for temperature value and degree symbol */
export const TemperatureSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: calc(var(--spacing-unit) * 1);

  @media (min-width: 768px) {
    gap: calc(var(--spacing-unit) * 2);
  }
`;

/** Large temperature numeric value */
export const TempValue = styled.span`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.4);  /* Relative to font size */
  color: white;

  @media (min-width: 768px) {
    font-size: var(--font-size-6xl);
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-8xl);
  }
`;

/** Temperature unit symbol (°C or °F) */
export const TempUnit = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: calc(var(--spacing-unit) * 2);
  opacity: 0.8;
  color: white;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-top: calc(var(--spacing-unit) * 2.5);
  }

  @media (min-width: 1366px) {
    font-size: 2.5rem;
    margin-top: calc(var(--spacing-unit) * 3);
  }
`;

/** "Feels like" temperature indicator */
export const FeelsLikeText = styled.p`
  font-size: var(--font-size-base);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);  /* Relative to font size */
  margin: 0;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: var(--font-size-lg);
  }

  @media (min-width: 1366px) {
    font-size: 1.3rem;
  }
`;

/** Container for weather icon and condition text */
export const ConditionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--spacing-unit) * 2);

  @media (min-width: 768px) {
    gap: calc(var(--spacing-unit) * 3);
  }
`;

/** Weather condition icon image */
export const WeatherIcon = styled.img`
  width: var(--spacing-16);   /* 64px - Close to 70px */
  height: var(--spacing-16);

  @media (min-width: 768px) {
    width: var(--spacing-20);   /* 80px - Close to 85px */
    height: var(--spacing-20);
  }

  @media (min-width: 1366px) {
    width: var(--spacing-24);   /* 96px - Close to 100px */
    height: var(--spacing-24);
  }
`;

/** Weather condition description text */
export const ConditionText = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: 500;
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);  /* Responsive to font size */
  color: white;

  @media (min-width: 768px) {
    font-size: var(--font-size-3xl);
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-4xl);
  }
`;
