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

export const FoodList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Food = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &:hover {
    cursor: pointer;
    background-color: hsl(from var(--color-bg) h s calc(l * 0.9));
  }

  h1 {
    font-weight: bold;
  }

  h2 {
    font-style: italic;
  }
`;

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
