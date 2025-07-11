import { useState } from 'react';
import * as Styled from './App.styles';
import { type Food, type Filter } from './types';
import { foods } from './data';

import FoodIdeas from './FoodIdeas/FoodIdeas';

const getFilteredFoods = (foods: Food[], filter: Filter) =>
  foods.filter((food) => {
    const matchesSeason =
      filter.season === 'all' ||
      (food.seasons && food.seasons.includes(filter.season));
    const matchesNutrient =
      filter.nutrient === 'all' || food.nutrient === filter.nutrient;
    return matchesSeason && matchesNutrient;
  });

const App = () => {
  const [filter, setFilter] = useState<Filter>({
    season: 'all',
    nutrient: 'all',
  });

  return (
    <Styled.Container>
      <FoodIdeas
        filter={filter}
        setFilter={setFilter}
        foods={getFilteredFoods(foods, filter)}
      />
    </Styled.Container>
  );
};

export default App;
