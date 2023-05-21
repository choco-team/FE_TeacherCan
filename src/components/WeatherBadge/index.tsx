import Cloud from '@Assets/image/Cloud.png';

import * as S from './style';

function WeatherBadge() {
  return (
    <S.Layout>
      <S.Container>
        <S.WeatherIcon src={Cloud} />
        <S.Temperature>21℃</S.Temperature>
        <S.Dust>매우나쁨</S.Dust>
      </S.Container>
    </S.Layout>
  );
}

export default WeatherBadge;
