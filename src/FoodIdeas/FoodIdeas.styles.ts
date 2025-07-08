import styled from 'styled-components';
export { H1 } from '../App.styles';

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
