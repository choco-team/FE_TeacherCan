import styled from 'styled-components';

interface GridContainerProps {
  selectedSize: string; // selectedOption에서 selectedSize로 변경
}

export const GridItem = styled.div`
  border: 1px solid #ccc;
  text-align: center;
`;

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  border: 1px solid #ccc;
  gap: 10px;
  padding: 10px;
  width: 100%;
  align-items: center;

  grid-template-columns: ${({ selectedSize }) => {
    switch (selectedSize) {
      case '5*8':
        return 'repeat(5, 1fr)';
      case '4*4':
        return 'repeat(4, 1fr)';
      case '2*2':
        return 'repeat(2, 1fr)';
      case '1*1':
        return 'repeat(1, 1fr)';
      default:
        return 'repeat(5, 1fr)';
    }
  }};

  grid-template-rows: ${({ selectedSize }) => {
    switch (selectedSize) {
      case '5*8':
        return 'repeat(8, auto)';
      case '4*4':
        return 'repeat(4, auto)';
      case '2*2':
        return 'repeat(2, auto)';
      case '1*1':
        return 'repeat(1, auto)';
      default:
        return 'repeat(8, auto)';
    }
  }};

  @media print {
    border: none;
    page-break-inside: avoid;
    break-inside: avoid;
    margin: 30px;
    padding: 0;
    width: auto;

    /* 동적으로 grid-template-columns와 grid-template-rows 설정 */
    grid-template-columns: ${({ selectedSize }) => {
      switch (selectedSize) {
        case '5*8':
          return 'repeat(5, 1fr)';
        case '4*4':
          return 'repeat(4, 1fr)';
        case '2*2':
          return 'repeat(2, 1fr)';
        case '1*1':
          return 'repeat(1, 1fr)';
        default:
          return 'repeat(5, 1fr)';
      }
    }};
    grid-template-rows: ${({ selectedSize }) => {
      switch (selectedSize) {
        case '5*8':
          return 'repeat(8, auto)';
        case '4*4':
          return 'repeat(4, auto)';
        case '2*2':
          return 'repeat(2, auto)';
        case '1*1':
          return 'repeat(1, auto)';
        default:
          return 'repeat(8, auto)';
      }
    }};
  }
}`;
