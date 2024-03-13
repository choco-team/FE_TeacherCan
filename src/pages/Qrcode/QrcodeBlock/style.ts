import styled from 'styled-components';

type StorageProps = {
  $isSelected: boolean;
};

export const Storage = styled.div<StorageProps>`
  background-color: ${({ $isSelected }) => ($isSelected ? '#fee3e2' : 'white')};
  cursor: pointer;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fee3e2;
    border: 1px solid #fe6f61;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  flex: 2;
  padding-left: 20px;
  gap: 5px;
`;
export const TextSpan = styled.span`
  padding: 8px;
  text-align: center;
  color: 'black';
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
`;

export const Body = styled.div``;
