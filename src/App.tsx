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
      <div>
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
              <Styled.Food key={food.name}>
                {food.image && <img src={food.image} alt={food.name} />}
                <h1>{food.name}</h1>
                <h2>{food.seasons ? `${food.seasons}` : ''}</h2>
              </Styled.Food>
            ))}
          </Styled.FoodList>
      </div>
    </Styled.Container>
  );
};

export default App;
