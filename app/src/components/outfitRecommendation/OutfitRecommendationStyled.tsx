import styled from 'styled-components';

/**
 * Outfit Recommendation Styled Components
 * Displays AI-generated clothing suggestions in a glass-morphism card
 */

/** Glassmorphic container with backdrop blur effect */
export const Container = styled.div`
  padding: calc(var(--spacing-unit) * 4);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.75rem;
  max-width: 56.25rem;  /* 900px */
  margin-left: auto;
  margin-right: auto;
  flex-shrink: 0;

  @media (min-width: 768px) {
    padding: calc(var(--spacing-unit) * 5);
    border-radius: var(--spacing-5);  /* 20px */
  }

  @media (min-width: 1366px) {
    padding: calc(var(--spacing-unit) * 6);
  }
`;

/** Section title for outfit recommendations */
export const Title = styled.h3`
  font-size: var(--font-size-2xl);
  margin-bottom: calc(var(--spacing-unit) * 2);
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);  /* Responsive to font size */
  color: white;

  @media (min-width: 768px) {
    font-size: var(--font-size-3xl);
    margin-bottom: calc(var(--spacing-unit) * 2.5);
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-4xl);
    margin-bottom: calc(var(--spacing-unit) * 3);
  }
`;

/** AI-generated outfit recommendation text */
export const RecommendationText = styled.p`
  font-size: var(--font-size-base);
  line-height: 1.625;
  opacity: 0.95;
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);  /* Responsive to font size */
  color: white;

  @media (min-width: 768px) {
    font-size: var(--font-size-lg);
    line-height: 1.4;
  }

  @media (min-width: 1366px) {
    font-size: var(--font-size-2xl);
  }
`;
