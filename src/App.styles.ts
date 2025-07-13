import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
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
  justify-content: center;

  @media (width < 600px) {
    gap: 0.5rem;
  }
`;

export const FilterLabel = styled.div<{ selected: boolean }>`
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? '600' : '300')};
`;

export const FoodList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (width < 600px) {
    gap: 0.5rem;
  }
`;

export const Food = styled.div`
  position: relative;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding-inline: 0.5rem;
  width: 6rem;
  height: 6rem;
  max-width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  color: black;

  img {
    height: 5rem;
  }

  &:hover {
    img {
      opacity: 0.5;
    }
    p {
      opacity: 1;
      &:hover {
        cursor: default;
      }
    }
  }
`;

export const FoodLabel = styled.p<{ alwaysShow: boolean }>`
  opacity: ${(props) => (props.alwaysShow ? 1 : 0)};
  position: absolute;
  padding: 0.5rem;
  max-width: 100%;
  font-size: 0.85rem;
`;

export const Footer = styled.footer`
  margin-block-start: 5rem;
`;
