import styled from 'styled-components';

/**
 * Error Screen Styled Components
 * Displays error messages in a centered, responsive layout
 */

/** Main container for error screen */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: calc(var(--spacing-unit) * 4);
  text-align: center;

  @media (min-width: 768px) {
    padding: calc(var(--spacing-unit) * 6);
  }

  @media (min-width: 1366px) {
    padding: calc(var(--spacing-unit) * 8);
  }
`;

/** Error title heading */
export const ErrorTitle = styled.h2`
  font-size: var(--font-size-3xl);
  margin-bottom: calc(var(--spacing-unit) * 4);
  color: white;

  @media (min-width: 768px) {
    font-size: var(--font-size-4xl);
    margin-bottom: calc(var(--spacing-unit) * 5);
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-5xl);
    margin-bottom: calc(var(--spacing-unit) * 6);
  }
`;

/** Error message text */
export const ErrorMessage = styled.p`
  font-size: var(--font-size-xl);
  opacity: 0.8;
  color: white;

  @media (min-width: 768px) {
    font-size: var(--font-size-2xl);
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-3xl);
  }
`;
