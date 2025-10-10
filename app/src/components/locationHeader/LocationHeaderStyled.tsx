import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  flex-shrink: 0;
`;

export const LocationTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: clamp(0.25rem, 0.5vh, 0.5rem);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  color: white;
`;

export const TimeIndicator = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  opacity: 0.9;
  color: white;
`;
