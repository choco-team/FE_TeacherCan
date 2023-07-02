import styled from 'styled-components';

export const VacationDate = styled.span`
  border-radius: 20px;
  background-color: ${(props) => props.theme.background.orange};
  color: ${(props) => props.theme.primaryText};
  font-weight: 600;
  padding: 5px 30px;
`;
