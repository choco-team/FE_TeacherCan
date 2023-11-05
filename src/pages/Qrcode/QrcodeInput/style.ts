import styled from 'styled-components';

// import Button from '@Components/Button';
// import theme from '@Styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Input = styled.input`
  width: 60%;
  margin: 20px;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 2px solid #f48d8d;
  transition: background-size 0.3s;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    border: 2px solid #f48d8d;
    border-radius: 5px;
  }
`;

export const ClearButton = styled.div`
  padding: 10px 20px;
  height: 35px;
  width: 100px;
  text-align: center;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  gap: 20px;
`;

export const Button = styled.div`
  padding: 10px 20px;
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
