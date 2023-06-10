import { Link } from 'react-router-dom';

import * as S from './style';
import type { NavigationLink } from './type';

function NavigationLink({ category, name, path, isSelected }: NavigationLink) {
  return (
    <S.Layout category={category} isSelected={isSelected}>
      <Link to={path}>{name}</Link>
    </S.Layout>
  );
}

export default NavigationLink;
