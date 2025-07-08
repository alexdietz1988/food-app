import { useState } from 'react';
import * as Styled from './App.styles';
import { type Season, type Food } from './types';
import { days } from './types';

import FoodIdeas from './FoodIdeas/FoodIdeas';
import MealPlan from './MealPlan/MealPlan';

const foods: Food[] = [
  { name: 'burger', category: 'protein' },
  { name: 'chili', category: 'protein' },
  { name: 'beans', category: 'protein' },
  { name: 'sheet-pan gnocchi', category: 'carbs' },
  { name: 'spaghetti', category: 'carbs' },
  { name: 'mac and cheese', category: 'carbs' },
  { name: 'pizza', category: 'carbs' },
  { name: 'rice', category: 'carbs' },
  { name: 'salad', category: 'veggies' },
  { name: 'roasted veggies', category: 'veggies' },
  { name: 'roasted butternut squash salad', category: 'veggies' },
  { name: 'chocolate-chip cookies', category: 'sweets' },
  { name: 'chipotle', category: 'restaurants' },
  { name: 'summer squash', category: 'veggies', seasons: ['summer'] },
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

  const [selectedSeason, setSelectedSeason] = useState<Season>('all');

  return (
    <Styled.Container>
      <FoodIdeas
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
        foods={foods}
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
