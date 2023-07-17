import { useState } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

import * as S from './style';

interface RadioBoxProps {
  name: string;
  children: React.ReactNode;
}

function RadioBox({ name, children }: RadioBoxProps) {
  const [isClicked, setIsClicked] = useState(false);
  const handleRadioboxChange = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.Layout>
      <S.Label>
        <S.RadioBox
          type="radio"
          name={name}
          onChange={handleRadioboxChange}
          style={{ marginRight: '8px' }}
        />

        {children}
      </S.Label>
    </S.Layout>
  );
}

export default RadioBox;
