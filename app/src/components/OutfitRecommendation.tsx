import styled from 'styled-components';

interface OutfitRecommendationProps {
  text: string;
}

const Container = styled.div`
  padding: clamp(1rem, 2vw, 2rem);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: clamp(0.8rem, 1.5vw, 1.5rem);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  flex-shrink: 0;
`;

const Title = styled.h3`
  font-size: clamp(1.4rem, 3.5vw, 2.8rem);
  margin-bottom: clamp(0.5rem, 1vh, 1rem);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  color: white;
`;

const RecommendationText = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  line-height: 1.4;
  opacity: 0.95;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  color: white;
`;

export function OutfitRecommendation({ text }: OutfitRecommendationProps) {
  return (
    <Container>
      <Title>What to Wear</Title>
      <RecommendationText>{text}</RecommendationText>
    </Container>
  );
}
