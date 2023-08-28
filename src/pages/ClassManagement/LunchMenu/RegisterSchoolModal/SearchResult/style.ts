import styled from 'styled-components';

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

  margin-left: 0rem;
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
