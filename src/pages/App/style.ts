import styled from 'styled-components';

export const DefaultPageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: ${(props) => props.theme.pageBackground};
  min-height: 100vh;
`;

export const PageWrapper = styled.div`
  margin-top: calc(2rem + 34px);
`;
