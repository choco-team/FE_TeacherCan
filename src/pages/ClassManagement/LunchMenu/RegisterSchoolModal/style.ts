import styled from 'styled-components';

export const SearchSchoolLayout = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const SearchSchoolForm = styled.form`
  display: flex;
  gap: 10px;

  input {
    max-width: 100%;
  }
`;

export const SearchResult = styled.ul`
  min-height: 360px;
  overflow: auto;
  line-height: 160%;

  color: ${(props) => props.theme.grayText};
  li {
    margin-left: 2rem;
    list-style-type: disc;
  }

  svg {
    width: 100%;
    margin: 30px auto;
    font-size: 16rem;
  }
`;
