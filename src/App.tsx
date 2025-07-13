import { useState } from 'react';
import * as Styled from './App.styles';
import { type Filter, seasons, nutrients } from './types';
import { foods as foodsRaw } from './data';
import FoodList from './FoodList/FoodList';

const App = () => {
  const [filter, setFilter] = useState<Filter>({
    season: 'all',
    nutrient: 'all',
  });

  const foods = foodsRaw.filter((food) => {
    const matchesSeason =
      filter.season === 'all' ||
      (food.seasons && food.seasons.includes(filter.season));
    const matchesNutrient =
      filter.nutrient === 'all' || food.nutrient === filter.nutrient;
    return matchesSeason && matchesNutrient;
  });

  return (
    <Styled.Container>
      <div>
        <Styled.H1>Food Ideas</Styled.H1>
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
          <Styled.Filter>
            <h2>Nutrients:</h2>
            {nutrients.map((nutrient) => (
              <Styled.FilterLabel
                onClick={() => setFilter((prev) => ({ ...prev, nutrient }))}
                selected={filter.nutrient === nutrient}
              >
                {nutrient}
              </Styled.FilterLabel>
            ))}
          </Styled.Filter>
        </Styled.FiltersContainer>
        <FoodList foods={foods} />
      </div>
    </Styled.Container>
  );
};

export default App;
