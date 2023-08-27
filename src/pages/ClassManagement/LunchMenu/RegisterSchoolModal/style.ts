import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const SearchSchoolLayout = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const SearchSchoolForm = styled.form`
  display: flex;
  gap: 10px;

  input {
    max-width: 100%;
  }
`;

export const SearchResult = styled.ul`
  min-height: 360px;
  overflow: auto;
  line-height: 160%;

  color: ${(props) => props.theme.grayText};
  li {
    margin-left: 2rem;
    list-style-type: disc;
  }
`;

export const SchoolList = styled.div`
  max-height: 360px;
  overflow: auto;

  display: grid;
  row-gap: 10px;

  li {
    margin-left: 0rem;
    list-style-type: none;
  }
`;

export const SchoolItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;

  color: ${(props) => props.theme.text};

  button {
    align-self: flex-start;
    grid-column: 2 / -1;
    grid-row: 1 / 3;
  }
`;

export const SchoolAddress = styled.span`
  grid-column: 1 / 2;
  font-size: 1.4rem;

  color: ${(props) => props.theme.grayText};
`;

type PagiNationButtonProps = {
  hasPage: boolean;
};

export const PagiNationButton = styled.div<PagiNationButtonProps>`
  ${flexCustom('row', 'center', 'center')}
  gap: 10px;

  margin-top: 10px;
  color: ${(props) => (props.hasPage ? props.theme.grayText : 'transparent')};

  svg {
    cursor: ${(props) => props.hasPage && 'pointer'};
  }
`;
