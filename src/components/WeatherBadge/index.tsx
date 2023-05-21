import * as S from './style';

type Weather = {
  sky: string;
  temperature: string;
  dust: string;
};

type WeatherBadgeProps = {
  weather: Weather;
};

function WeatherBadge({ weather }: WeatherBadgeProps) {
  return (
    <S.Layout>
      <S.Container>
        <S.WeatherIcon src={weather.sky} />
        <S.Temperature>{weather.temperature}</S.Temperature>
        <S.Dust>{weather.dust}</S.Dust>
      </S.Container>
    </S.Layout>
  );
}

export default WeatherBadge;
