import styled from 'styled-components';

// import Button from '@Components/Button';
// import theme from '@Styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 20px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  gap: 20px;
`;

export const Button = styled.div`
  padding: 10px;
  font-size: 14px;
  background-color: #f48d8d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff6f61;
  }
`;
export const StorageButton = styled.div`
  padding: 10px 20px;
  font-size: 14px;
  background-color: #f48d8d;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: auto;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: #ff6f61;
  }
`;

export const QrCodeBlockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
`;

export const SelectAllButton = styled.button`
  width: fit-content;
  padding: 10px;
  font-size: 14px;
  background-color: #f4f4f5;
  color: #f48d8d;
  border: solid;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e4e4e7;
  }
  text-align: right;
`;
