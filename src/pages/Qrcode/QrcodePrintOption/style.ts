import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 30px;
  padding: 20px;
  width: 100%;
  gap: 30px;
`;

export const NameSpan = styled.span`
  margin: 5px;
  border-radius: 2px;
  min-height: 24px;
  min-width: 96px;
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

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #ccc;
  border-radius: 2px;
`;

export const NumberInput = styled.input`
  width: 60px;
  text-align: center;
`;

export const NumberUpdownButton = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: #f48d8d;
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

export const ListSpan = styled.span`
  margin: 5px;
  border-radius: 2px;
  min-height: 24px;
  min-width: 96px;
  padding: 8px;
  color: 'black';
`;
export const SmallButtonWrapper = styled.div`
  display: flex;
  padding: 0;
  margin-top: 24px;
  align-items: flex-end;
  justify-content: flex-end;
  button {
    margin-right: 5px;
  }
`;
