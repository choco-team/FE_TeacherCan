import styled from 'styled-components';

export const LoadLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100%;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: start;
  row-gap: 40px;

  padding: 60px;

  min-height: 100%;

  color: ${(props) => props.theme.text};
`;

export const SchoolName = styled.div`
  padding: 8px 12px;
  border-radius: 3px;

  font-size: 2rem;

  background-color: ${(props) => props.theme.background.primary};
  color: ${(props) => props.theme.primaryText};
`;

export const StandardDate = styled.input`
  font-size: 2rem;
`;

export const IconWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  svg {
    width: 500px;
    height: 500px;
  }
`;
