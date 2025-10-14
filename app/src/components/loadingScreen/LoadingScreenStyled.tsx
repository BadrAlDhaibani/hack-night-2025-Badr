import styled, { keyframes } from 'styled-components';

/**
 * Loading Screen Styled Components
 * Displays an animated spinner with loading text
 */

/** Spinning animation for the loading indicator */
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

/** Main container for loading screen */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: calc(var(--spacing-unit) * 4);
`;

/** Circular spinning loader */
export const Spinner = styled.div`
  width: var(--spacing-12);   /* 48px - closest to 50px */
  height: var(--spacing-12);
  margin-bottom: calc(var(--spacing-unit) * 4);
  border: var(--spacing-1-5) solid rgba(255, 255, 255, 0.3);  /* 6px */
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  @media (min-width: 768px) {
    width: var(--spacing-16);   /* 64px - scales better than 60px */
    height: var(--spacing-16);
    border-width: var(--spacing-2);  /* 8px */
    margin-bottom: calc(var(--spacing-unit) * 5);
  }

  @media (min-width: 1366px) {
    width: var(--spacing-20);   /* 80px - more dramatic on large screens */
    height: var(--spacing-20);
    border-width: var(--spacing-2);  /* 8px */
    margin-bottom: calc(var(--spacing-unit) * 6);
  }
`;

/** Loading status text below spinner */
export const LoadingText = styled.h2`
  font-size: var(--font-size-xl);
  opacity: 0.9;
  color: white;
  text-align: center;

  @media (min-width: 768px) {
    font-size: var(--font-size-2xl);
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-3xl);
  }
`;
