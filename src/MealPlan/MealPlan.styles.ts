import styled from 'styled-components';

export { H1 } from '../App.styles';

export const MealPlan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Day = styled.h2<{ selected: boolean }>`
  cursor: pointer;
  font-weight: 300;
  font-weight: ${(props) => (props.selected ? '600' : '300')};

  p {
    margin-block-end: 0.5rem;
  }
`;
