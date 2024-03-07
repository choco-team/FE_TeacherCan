import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import useOutsideClick from '@Hooks/useOutsideClick';

import ArrowIcon from '@Components/Icon/ArrowIcon/ArrowIcon';

import * as S from './style';

type SelectProps<Options extends readonly (string | number)[]> = {
  label?: string;
  placeholder?: string;
  defaultOption?: Options[number];
  options: Options;
  onChangeOption?: (selected: Options[number]) => void;
};

const Select = <Options extends readonly (string | number)[]>({
  label,
  placeholder = '옵션을 선택해 주세요.',
  defaultOption = '',
  options,
  onChangeOption,
}: SelectProps<Options>) => {
  const optionsRef = useRef<HTMLUListElement>(null);

  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isOpenOptions, setIsOptionOptions] = useState(false);

  const ref = useOutsideClick<HTMLDivElement>(() => setIsOptionOptions(false));

  const [offsetTop, setOffsetTop] = useState(ref?.current?.offsetTop || 0);
  const [clientWidth, setClientWidth] = useState(
    ref?.current?.clientWidth || 0,
  );

  const handleClickArrowIcon: MouseEventHandler<SVGSVGElement> = (event) => {
    event.preventDefault();

    setIsOptionOptions((prev) => !prev);
  };

  const handleChangeOption = (value: Options[number]) => {
    setIsOptionOptions(false);
    setSelectedOption(value);

    onChangeOption?.(value);
  };

  const setOptionsPositionWidth = useCallback(() => {
    const offsetTop = ref?.current?.offsetTop;
    const clientWidth = ref?.current?.clientWidth;

    if (!offsetTop || !clientWidth) return;

    setOffsetTop(offsetTop);
    setClientWidth(clientWidth);
  }, [ref]);

  useEffect(() => {
    window.addEventListener('resize', setOptionsPositionWidth);

    return () => window.removeEventListener('resize', setOptionsPositionWidth);
  }, [setOptionsPositionWidth]);

  useLayoutEffect(() => {
    if (!isOpenOptions) return;

    setOptionsPositionWidth();
  }, [isOpenOptions, setOptionsPositionWidth]);

  useEffect(() => {
    if (defaultOption) setSelectedOption(defaultOption);
  }, [defaultOption]);

  // 스크롤 계산
  useEffect(() => {
    if (!isOpenOptions || !optionsRef?.current) return;

    const { scrollHeight, offsetHeight, children } = optionsRef.current;
    if (scrollHeight < offsetHeight) return;

    const options = Object.values(children) as HTMLLIElement[];

    let top = 10;
    for (let i = 0; i < options.length; i++) {
      const { offsetHeight, innerText } = options[i];
      top += offsetHeight + 8;

      if (innerText === selectedOption) break;
    }

    optionsRef.current.scrollTo({
      top: top - 160,
    });
  }, [isOpenOptions, selectedOption]);

  return (
    <S.Select ref={ref}>
      <label>
        <S.LabelText>{label}</S.LabelText>
        <S.InputLayout $isFocus={isOpenOptions}>
          <S.Input
            readOnly
            value={selectedOption}
            onClick={() => setIsOptionOptions((prev) => !prev)}
            placeholder={placeholder}
          />
          <ArrowIcon
            direction={isOpenOptions ? 'up' : 'down'}
            onClick={handleClickArrowIcon}
          />
        </S.InputLayout>
      </label>
      {isOpenOptions && (
        <S.Options
          ref={optionsRef}
          top={label ? `${offsetTop + 60}px` : `${offsetTop + 45}px`}
          width={`${clientWidth}px`}
        >
          {options.map((option) => (
            <S.Option
              key={option}
              onClick={() => handleChangeOption(option)}
              $isSelected={selectedOption === option}
            >
              {option}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.Select>
  );
};

export default Select;
