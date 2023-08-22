import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  row-gap: 20px;

  button {
    justify-self: flex-end;
  }
`;

export const Title = styled.h3`
  text-align: center;

  font-size: 1.8rem;
  color: ${(props) => props.theme.accentText};
  font-weight: 600;
`;

export const SubTitle = styled.h4`
  color: ${(props) => props.theme.grayText};
`;

export const AllergyList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
