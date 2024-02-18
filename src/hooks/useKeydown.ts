import { useEffect } from 'react';

const useKeydown = (
  char: string | string[],
  callback: ([key, code]: string[]) => void,
) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const { key, code } = event;
      if (
        (char instanceof Array && char.includes(key)) ||
        (char instanceof Array && char.includes(code)) ||
        key === char ||
        code === char
      ) {
        callback([key, code]);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [callback, char]);
};

export default useKeydown;
