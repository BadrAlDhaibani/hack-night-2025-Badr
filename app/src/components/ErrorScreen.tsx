import styled from 'styled-components';

interface ErrorScreenProps {
  message: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: clamp(1rem, 3vw, 4rem);
  text-align: center;
`;

const ErrorTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: clamp(1rem, 2vh, 2rem);
  color: white;
`;

const ErrorMessage = styled.p`
  font-size: clamp(1.2rem, 3vw, 2.5rem);
  opacity: 0.8;
  color: white;
`;

export function ErrorScreen({ message }: ErrorScreenProps) {
  return (
    <Container>
      <ErrorTitle>Error</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
    </Container>
  );
}
