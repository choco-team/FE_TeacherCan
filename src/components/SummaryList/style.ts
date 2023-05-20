import styled from 'styled-components';

type LayoutProps = {
  width: string;
};

export const Layout = styled.div<LayoutProps>`
  display: grid;
  row-gap: 1.5rem;

  width: ${({ width }) => width};
  padding: 1.5rem;
  border-radius: 0.5rem;

  box-shadow: 0rem 0.2rem 1.5rem rgba(198, 198, 198, 0.25);

  background: ${({ theme }) => theme.background.basic};

  color: ${({ theme }) => theme.text};
`;

export const Title = styled.div`
  font-weight: 600;

  line-height: 160%;
`;

export const SummaryList = styled.ul`
  display: grid;
`;

export const SummaryItem = styled.li`
  padding: 1.5rem 0rem;

  border-top: 0.05rem solid #e2e2e2;

  line-height: 160%;

  :last-child {
    padding-bottom: 0rem;
  }
`;
