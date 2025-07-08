import { useState } from 'react';
import * as Styled from './App.styles';
import { type Food, type Filter } from './types';
import { days } from './types';
import { foods } from './data';

import FoodIdeas from './FoodIdeas/FoodIdeas';
import MealPlan from './MealPlan/MealPlan';

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
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [mealPlan, setMealPlan] = useState({
    Monday: [] as Food[],
    Tuesday: [] as Food[],
    Wednesday: [] as Food[],
    Thursday: [] as Food[],
    Friday: [] as Food[],
    Saturday: [] as Food[],
    Sunday: [] as Food[],
  });
  const addFoodToDay = (food: Food) => {
    const existing = mealPlan[selectedDay as keyof typeof mealPlan];
    if (existing.find((f) => f.name === food.name)) return;
    setMealPlan((prev) => ({
      ...prev,
      [selectedDay]: [...existing, food],
    }));
  };
  const removeFoodFromDay = (food: Food) => {
    setMealPlan((prev) => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay as keyof typeof mealPlan]].filter(
        (f) => f.name !== food.name
      ),
    }));
  };

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
        addFoodToDay={addFoodToDay}
      />
      <MealPlan
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        mealPlan={mealPlan}
        removeFoodFromDay={removeFoodFromDay}
      />
    </Styled.Container>
  );
};

export default App;
