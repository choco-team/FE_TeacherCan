import styled from 'styled-components';

// import Button from '@Components/Button';
// import theme from '@Styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const InputContainer = styled.div``;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  border: none;
  outline: none;
  background: transparent; /* 투명한 배경 설정 */
  border-bottom: 2px solid #f48d8d; /* 밑줄 색상을 #F48D8D로 설정 */
  transition: background-size 0.3s;
  &::placeholder {
    color: #ccc; /* Placeholder 텍스트 색상을 연한 회색(#ccc)으로 설정 */
  }
  &:focus {
    background: #fee3e2; /* 포커스 시 배경색을 #FEE3E2로 설정 */
    border-bottom: 2px solid #fee3e2; /* 포커스 시 밑줄 색상을 #FEE3E2로 설정 */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
