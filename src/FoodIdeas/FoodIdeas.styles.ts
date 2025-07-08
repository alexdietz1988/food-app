import styled from 'styled-components';
export { H1 } from '../App.styles';

export const SeasonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SeasonLabel = styled.div<{ selected: boolean }>`
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? '600' : '300')};
`;
