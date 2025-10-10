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
`;
