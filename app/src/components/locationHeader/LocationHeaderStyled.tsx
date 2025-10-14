import styled from 'styled-components';

/**
 * Location Header Styled Components
 * Displays the user's location and current local time
 */

/** Main container for location header */
export const Container = styled.div`
  text-align: center;
  flex-shrink: 0;
`;

/** Location name heading (city, region) */
export const LocationTitle = styled.h1`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: calc(var(--spacing-unit) * 1);
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);  /* Responsive to font size */
  color: white;

  @media (min-width: 768px) {
    font-size: var(--font-size-4xl);
    margin-bottom: calc(var(--spacing-unit) * 1.5);
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-5xl);
  }
`;

/** Current local time display */
export const TimeIndicator = styled.p`
  font-size: var(--font-size-lg);
  opacity: 0.9;
  color: white;

  @media (min-width: 768px) {
    font-size: var(--font-size-xl);
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-2xl);
  }
`;
