import styled from 'styled-components';

export const SearchSchoolLayout = styled.div`
  display: grid;
  row-gap: 20px;

  align-items: flex-start;
`;

export const SearchSchoolForm = styled.form`
  display: flex;
  gap: 10px;

  input {
    max-width: 100%;
  }
`;

export const SearchResult = styled.ul`
  min-height: 260px;
`;
