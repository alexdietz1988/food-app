import { useState } from 'react';
import * as Styled from './App.styles';
import { type Filter, seasons } from './types';
import { foods as foodsRaw } from './data';

const App = () => {
  const [filter, setFilter] = useState<Filter>({
    season: 'all',
  });

  const foods = foodsRaw.filter((food) => {
    const matchesSeason =
      filter.season === 'all' ||
      (food.seasons && food.seasons.includes(filter.season));
    return matchesSeason;
  });

  return (
    <Styled.Container>
      <Styled.H1>Seasonal Produce</Styled.H1>
      <Styled.FiltersContainer>
        <Styled.Filter>
          <h2>Seasons:</h2>
          {seasons.map((season) => (
            <Styled.FilterLabel
              onClick={() => setFilter((prev) => ({ ...prev, season }))}
              selected={filter.season === season}
            >
              {season}
            </Styled.FilterLabel>
          ))}
        </Styled.Filter>
      </Styled.FiltersContainer>
      <Styled.FoodList>
        {foods.map((food) => (
          <Styled.Food key={food.name} title={food.name}>
            {food.image && <img src={food.image} alt={food.name} />}
            <Styled.FoodLabel alwaysShow={!food.image}>
              {food.name}
            </Styled.FoodLabel>
          </Styled.Food>
        ))}
      </Styled.FoodList>
      <Styled.Footer>
        Based on the USDA’s{' '}
        <a
          target="_blank"
          href="https://snaped.fns.usda.gov/resources/nutrition-education-materials/seasonal-produce-guide"
        >
          Seasonal Produce Guide
        </a>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default App;
