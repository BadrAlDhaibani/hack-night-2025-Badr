import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: clamp(0.5rem, 2vh, 2rem) clamp(1rem, 3vw, 4rem);
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

export const Logo = styled.div`
  position: absolute;
  top: clamp(1rem, 2vh, 2rem);
  left: clamp(1rem, 3vw, 3rem);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled.img`
  width: clamp(20px, 3vw, 28px);
  height: clamp(20px, 3vw, 28px);
  filter: brightness(0) invert(1);
`;

export const LogoText = styled.span`
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

export const Footer = styled.div`
  position: absolute;
  bottom: clamp(1rem, 2vh, 2rem);
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(0.85rem, 1.5vw, 0.9rem);
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
`;
