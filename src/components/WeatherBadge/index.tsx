import * as S from './style';
import type { WeatherBadge } from './type';

function WeatherBadge({
  weather,
  isRejected = false,
  isLoading,
}: WeatherBadge) {
  if (isRejected) {
    return (
      <S.Layout>
        <S.RejectMessage>위치 정보 없음</S.RejectMessage>
      </S.Layout>
    );
  }

  if (isLoading) {
    return (
      <S.Layout>
        <S.Container isLoading>로딩중</S.Container>
      </S.Layout>
    );
  }

  if (!weather) {
    return (
      <S.Layout>
        <S.Container>날씨 정보 없음</S.Container>
      </S.Layout>
    );
  }

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
