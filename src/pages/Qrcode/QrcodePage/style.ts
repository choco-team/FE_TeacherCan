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
