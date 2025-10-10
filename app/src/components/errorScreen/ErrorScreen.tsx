import * as S from './ErrorScreenStyled';

interface ErrorScreenProps {
  message: string;
}

export function ErrorScreen({ message }: ErrorScreenProps) {
  return (
    <S.Container>
      <S.ErrorTitle>Error</S.ErrorTitle>
      <S.ErrorMessage>{message}</S.ErrorMessage>
    </S.Container>
  );
}
