import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Spinner = styled.div`
  width: clamp(60px, 10vw, 80px);
  height: clamp(60px, 10vw, 80px);
  margin-bottom: clamp(1rem, 2vh, 2rem);
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.h2`
  font-size: clamp(1.5rem, 3vw, 3rem);
  opacity: 0.9;
  color: white;
`;
