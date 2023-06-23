import styled from 'styled-components';

const ButtonOrange = '#ff8a00';

export const VacationDate = styled.span`
  border-radius: 20px;
  background-color: ${ButtonOrange};
  color: ${(props) => props.theme.text};
  font-weight: 600;
  padding: 5px 30px;
`;
