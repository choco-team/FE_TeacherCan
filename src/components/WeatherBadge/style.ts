import styled from 'styled-components';

export const Layout = styled.span`
  display: inline-block;

  padding: 1rem 2rem;
  border-radius: 1.5rem;

  background-color: #f3f9ff;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 0.5rem;
  align-items: center;
`;

export const WeatherIcon = styled.img`
  width: 2rem;
`;

export const Temperature = styled.div``;

export const Dust = styled.div``;
