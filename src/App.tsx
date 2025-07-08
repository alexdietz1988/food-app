import { useState } from 'react';
import * as Styled from './App.styles';
import { type Food, type Filter } from './types';
import { days } from './types';

import FoodIdeas from './FoodIdeas/FoodIdeas';
import MealPlan from './MealPlan/MealPlan';

const foods: Food[] = [
  { name: 'burger', nutrient: 'protein' },
  { name: 'chili', nutrient: 'protein' },
  { name: 'beans', nutrient: 'protein' },
  { name: 'sheet-pan gnocchi', nutrient: 'carbs' },
  { name: 'spaghetti', nutrient: 'carbs' },
  { name: 'mac and cheese', nutrient: 'carbs' },
  { name: 'pizza', nutrient: 'carbs' },
  { name: 'rice', nutrient: 'carbs' },
  { name: 'salad', nutrient: 'veggies' },
  { name: 'roasted veggies', nutrient: 'veggies' },
  { name: 'roasted butternut squash salad', nutrient: 'veggies' },
  { name: 'chocolate-chip cookies', category: 'sweets' },
  { name: 'chipotle', category: 'restaurants' },
  { name: 'summer squash', nutrient: 'veggies', seasons: ['summer'] },
];

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
        foods={foods.filter(
          (food) =>
            filter.nutrient === 'all' || food.nutrient === filter.nutrient
        )}
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
