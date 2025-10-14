import styled from 'styled-components';

/**
 * Weather Details Styled Components
 * Displays humidity, precipitation, and wind speed metrics
 */

/** Main flex container for weather detail items */
export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: calc(var(--spacing-unit) * 6);
  flex-wrap: wrap;
  flex-shrink: 0;

  @media (min-width: 768px) {
    gap: calc(var(--spacing-unit) * 8);
  }

  @media (min-width: 1366px) {
    gap: calc(var(--spacing-unit) * 12);
  }
`;

/** Individual weather metric item (humidity, rain, wind) */
export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--spacing-unit) * 1);
  min-width: var(--spacing-20);  /* 80px */

  @media (min-width: 768px) {
    gap: calc(var(--spacing-unit) * 1.5);
    min-width: var(--spacing-24);  /* 96px - Closer to 100px */
  }
`;

/** Icon for each weather metric */
export const Icon = styled.img`
  width: var(--spacing-8);   /* 32px */
  height: var(--spacing-8);
  filter: brightness(0) invert(1);
  opacity: 0.9;

  @media (min-width: 768px) {
    width: var(--spacing-10);  /* 40px - Closer to 38px */
    height: var(--spacing-10);
  }

  @media (min-width: 1366px) {
    width: var(--spacing-11);  /* 44px - Closer to 42px */
    height: var(--spacing-11);
  }
`;

/** Label text for weather metric (HUMIDITY, RAIN, WIND) */
export const DetailLabel = styled.span`
  font-size: var(--font-size-sm);
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: white;

  @media (min-width: 768px) {
    font-size: var(--font-size-base);
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-xl);
    letter-spacing: 0.1em;
  }
`;

/** Numeric value for weather metric */
export const DetailValue = styled.span`
  font-size: var(--font-size-2xl);
  font-weight: 600;
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);  /* Responsive to font size */
  color: white;

  @media (min-width: 1366px) {
    font-size: var(--font-size-3xl);
  }
`;
