import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 10px;

  color: transparent;
`;

export const InformationContents = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-radius: 8px;
  padding: 20px;

  background-color: ${(props) => props.theme.sectionBackground};
`;

export const InformationContent = styled.li`
  line-height: 160%;
  color: ${(props) => props.theme.grayText};

  margin-left: 2rem;
  list-style-type: disc;

  &::marker {
    color: ${({ theme }) => theme.grayText};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  button {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: center;
    gap: 20px;

    span {
      position: relative;
      right: 16px;
    }
  }
`;
