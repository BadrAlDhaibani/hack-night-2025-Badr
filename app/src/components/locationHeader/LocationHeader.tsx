import * as S from './LocationHeaderStyled';

interface LocationHeaderProps {
  location: string;
  localTime: string;
}

export function LocationHeader({ location, localTime }: LocationHeaderProps) {
  // Parse the localTime string (format: "2025-10-09 14:30")
  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <S.Container>
      <S.LocationTitle>{location}</S.LocationTitle>
      <S.TimeIndicator>{formatTime(localTime)}</S.TimeIndicator>
    </S.Container>
  );
}
