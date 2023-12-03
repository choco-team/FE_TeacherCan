import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;

  display: flex;
  gap: 20px;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

export const DatePickerLayout = styled.div`
  position: absolute;

  top: 30px;
  right: 0;
`;
