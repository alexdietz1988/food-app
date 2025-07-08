import styled from 'styled-components';

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
  background-color: white;
  color: black;

  &:hover {
    cursor: pointer;
    background-color: hsl(0 0 90%);
  }

  h1 {
    font-weight: bold;
  }

  h2 {
    font-style: italic;
  }

  img {
    width: 5rem;
  }
`;
