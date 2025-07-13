import styled from 'styled-components';

export const Container = styled.div`
  & > div {
    margin-block-end: 4rem;
  }
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  margin-block-end: 1rem;
`;

export const FiltersContainer = styled.div`
  padding-block: 1rem;

  & > div {
    margin-bottom: 0.5rem;
  }
`;

export const Filter = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FilterLabel = styled.div<{ selected: boolean }>`
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? '600' : '300')};
`;
