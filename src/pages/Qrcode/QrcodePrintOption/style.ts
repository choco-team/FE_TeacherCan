import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  width: 100%;
  gap: 20px;
`;

export const NameSpan = styled.span`
  margin: 5px;
  border-radius: 2px;
  min-height: 24px;
  min-width: 96px;
  padding: 8px;
  color: 'black';
`;

export const SizeSelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
export const NumberSelectContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
`;

export const SizeSelectButton = styled.div`
  border: solid 1px black;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;
