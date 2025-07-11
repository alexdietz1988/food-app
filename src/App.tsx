import { useState } from 'react';
import * as Styled from './App.styles';
import { type Food, type Filter } from './types';
import { foods as foodsRaw } from './data';

import FoodIdeas from './FoodIdeas/FoodIdeas';
import Meals from './Meals/Meals';

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
  const foods = getFilteredFoods(foodsRaw, filter);

  return (
    <Styled.Container>
      <FoodIdeas filter={filter} setFilter={setFilter} foods={foods} />
      <Meals foods={foods} />
    </Styled.Container>
  );
};

export default App;
