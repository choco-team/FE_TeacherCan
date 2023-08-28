import styled from 'styled-components';

export const SearchResult = styled.ul`
  line-height: 160%;

  color: ${(props) => props.theme.grayText};

  li {
    margin-left: 2rem;
    list-style-type: disc;
  }
`;

export const SchoolList = styled.div`
  display: grid;
  row-gap: 10px;
  align-items: flex-start;

  overflow: auto;
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
