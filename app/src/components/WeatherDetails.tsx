import styled from 'styled-components';
import humidityIcon from '../assets/humidity-svgrepo-com.svg';
import windIcon from '../assets/wind-svgrepo-com.svg';
import rainIcon from '../assets/rain-svgrepo-com.svg';

interface WeatherDetailsProps {
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(1.5rem, 6vw, 4rem);
  flex-wrap: wrap;
  flex-shrink: 0;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.25rem, 0.5vh, 0.5rem);
  min-width: 100px;
`;

const Icon = styled.img`
  width: clamp(30px, 5vw, 50px);
  height: clamp(30px, 5vw, 50px);
  filter: brightness(0) invert(1);
  opacity: 0.9;
`;

const DetailLabel = styled.span`
  font-size: clamp(0.8rem, 2vw, 1.5rem);
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: white;
`;

const DetailValue = styled.span`
  font-size: clamp(1.2rem, 3vw, 2.5rem);
  font-weight: 600;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  color: white;
`;

export function WeatherDetails({ feelsLike, humidity, windSpeed, precipitation }: WeatherDetailsProps) {
  return (
    <Container>
      <DetailItem>
        <Icon src={humidityIcon} alt="Humidity" />
        <DetailLabel>Humidity</DetailLabel>
        <DetailValue>{humidity}%</DetailValue>
      </DetailItem>
      <DetailItem>
        <Icon src={rainIcon} alt="Precipitation" />
        <DetailLabel>Rain</DetailLabel>
        <DetailValue>{precipitation} mm</DetailValue>
      </DetailItem>
      <DetailItem>
        <Icon src={windIcon} alt="Wind" />
        <DetailLabel>Wind</DetailLabel>
        <DetailValue>{Math.round(windSpeed)} km/h</DetailValue>
      </DetailItem>
    </Container>
  );
}
