import * as S from './LoadingScreenStyled';

export function LoadingScreen() {
  return (
    <S.Container>
      <S.Spinner />
      <S.LoadingText>Loading weather data...</S.LoadingText>
    </S.Container>
  );
}
