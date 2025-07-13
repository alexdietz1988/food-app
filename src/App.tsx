import { useState } from 'react';
import * as Styled from './App.styles';
import { type Filter, seasons } from './types';
import { foods as foodsRaw } from './data';
import FoodList from './FoodList/FoodList';

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
        <FoodList foods={foods} />
      </div>
    </Styled.Container>
  );
};

export default App;
