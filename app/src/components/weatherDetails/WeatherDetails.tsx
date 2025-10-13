import * as S from './WeatherDetailsStyled';
import humidityIcon from '../../assets/humidity-svgrepo-com.svg';
import windIcon from '../../assets/wind-svgrepo-com.svg';
import rainIcon from '../../assets/rain-svgrepo-com.svg';

interface WeatherDetailsProps {
  humidity: number;
  windSpeed: number;
  precipitation: number;
}

export function WeatherDetails({ humidity, windSpeed, precipitation }: WeatherDetailsProps) {
  return (
    <S.Container>
      <S.DetailItem>
        <S.Icon src={humidityIcon} alt="Humidity" />
        <S.DetailLabel>Humidity</S.DetailLabel>
        <S.DetailValue>{humidity}%</S.DetailValue>
      </S.DetailItem>
      <S.DetailItem>
        <S.Icon src={rainIcon} alt="Precipitation" />
        <S.DetailLabel>Rain</S.DetailLabel>
        <S.DetailValue>{precipitation} mm</S.DetailValue>
      </S.DetailItem>
      <S.DetailItem>
        <S.Icon src={windIcon} alt="Wind" />
        <S.DetailLabel>Wind</S.DetailLabel>
        <S.DetailValue>{Math.round(windSpeed)} km/h</S.DetailValue>
      </S.DetailItem>
    </S.Container>
  );
}
