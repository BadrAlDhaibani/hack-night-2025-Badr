import styled from 'styled-components';

/**
 * Weather Display Styled Components
 * Main layout container with logo, footer, and all weather content
 */

/** Full-screen main container for entire weather display */
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: calc(var(--spacing-unit) * 4);
  max-width: 87.5rem;  /* 1400px - Keep as rem for consistency */
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    padding: calc(var(--spacing-unit) * 6);
  }

  @media (min-width: 1366px) {
    padding: calc(var(--spacing-unit) * 8);
  }
`;

/** Top-left logo branding */
export const Logo = styled.div`
  position: absolute;
  top: calc(var(--spacing-unit) * 3);
  left: calc(var(--spacing-unit) * 3);
  display: flex;
  align-items: center;
  gap: calc(var(--spacing-unit) * 1.5);

  @media (min-width: 768px) {
    top: calc(var(--spacing-unit) * 4);
    left: calc(var(--spacing-unit) * 4);
    gap: calc(var(--spacing-unit) * 2);
  }

  @media (min-width: 1366px) {
    top: calc(var(--spacing-unit) * 6);
    left: calc(var(--spacing-unit) * 8);
  }
`;

/** WthrFit logo icon */
export const LogoIcon = styled.img`
  width: var(--spacing-5);   /* 20px */
  height: var(--spacing-5);
  filter: brightness(0) invert(1);

  @media (min-width: 768px) {
    width: var(--spacing-6);   /* 24px */
    height: var(--spacing-6);
  }
`;

/** WthrFit logo text */
export const LogoText = styled.span`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: white;
  text-shadow: 0.0625em 0.0625em 0.2em rgba(0, 0, 0, 0.3);  /* Responsive to font size */

  @media (min-width: 768px) {
    font-size: var(--font-size-base);
  }
`;

/** Bottom footer with update information */
export const Footer = styled.div`
  position: absolute;
  bottom: calc(var(--spacing-unit) * 3);
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0.0625em 0.0625em 0.15em rgba(0, 0, 0, 0.3);  /* Responsive to font size */
  white-space: nowrap;
  padding: 0 calc(var(--spacing-unit) * 2);

  @media (min-width: 768px) {
    bottom: calc(var(--spacing-unit) * 4);
    font-size: var(--font-size-sm);
  }

  @media (min-width: 1366px) {
    bottom: calc(var(--spacing-unit) * 6);
  }

  .hide-mobile {
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;
