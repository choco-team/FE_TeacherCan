import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  width: 100%;
  gap: 30px;
`;

export const NameSpan = styled.span`
  margin: 5px;
  border-radius: 2px;
  padding: 8px;
  color: black;
  align-self: flex-start;
`;

export const SizeSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const NumberSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SizeSelectButton = styled.div<{ isSelected: boolean }>`
  border: solid 1px ${(props) => (props.isSelected ? '#F17071' : '#ccc')};
  background-color: ${(props) =>
    props.isSelected ? '#fee3e2' : 'transparent'};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #fee3e2;
    border: 1px solid #fe6f61;
  }
`;
