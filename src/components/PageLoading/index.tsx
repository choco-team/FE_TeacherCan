import CircularProgress from '@Components/CircularProgress';

import * as S from './style';

function PageLoading() {
  return (
    <S.Layout>
      <CircularProgress size="x-large" />
    </S.Layout>
  );
}

export default PageLoading;
