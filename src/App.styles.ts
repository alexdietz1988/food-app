import styled from 'styled-components';

export const FoodList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Food = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
  width: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h1 {
    font-weight: bold;
  }

  h2 {
    font-style: italic;
  }
`;

export const Day = styled.h2<{ selected: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.selected ? 'blue' : 'black')};
`;
