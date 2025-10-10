import * as S from './OutfitRecommendationStyled';

interface OutfitRecommendationProps {
  text: string;
}

export function OutfitRecommendation({ text }: OutfitRecommendationProps) {
  return (
    <S.Container>
      <S.Title>What to Wear</S.Title>
      <S.RecommendationText>{text}</S.RecommendationText>
    </S.Container>
  );
}
