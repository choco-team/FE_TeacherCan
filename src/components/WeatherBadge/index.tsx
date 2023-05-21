import * as S from './style';
import type { WeatherBadge } from './type';

function WeatherBadge({ weather, isRejected = false }: WeatherBadge) {
  return (
    <S.Layout>
      {isRejected ? (
        <S.RejectMessage>위치 정보 없음</S.RejectMessage>
      ) : !weather ? (
        <S.Container isLoading>로딩중</S.Container>
      ) : (
        <S.Container>
          <S.WeatherIcon src={weather.sky} />
          <S.Temperature>{weather.temperature}</S.Temperature>
          <S.Dust>{weather.dust}</S.Dust>
        </S.Container>
      )}
    </S.Layout>
  );
}

export default WeatherBadge;
