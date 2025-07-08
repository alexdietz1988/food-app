import { useState } from 'react';
import * as Styled from './App.styles';

interface Food {
  name: string;
  category?: string;
}

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
];

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

interface RenderFoodListProps {
  foods: Food[];
  onClick: (food: Food) => void;
}

const RenderFoodList = ({ foods, onClick }: RenderFoodListProps) => (
  <Styled.FoodList>
    {foods.map((food) => (
      <Styled.Food onClick={() => onClick(food)} key={food.name}>
        <h1>{food.name}</h1>
        <h2>{food.category ? ` ${food.category}` : ''}</h2>
      </Styled.Food>
    ))}
  </Styled.FoodList>
);

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
    setMealPlan((prev) => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay as keyof typeof mealPlan], food],
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

  return (
    <>
      <RenderFoodList foods={foods} onClick={addFoodToDay} />
      <hr />
      {days.map((day) => (
        <>
          <Styled.Day
            onClick={() => setSelectedDay(day)}
            selected={selectedDay === day}
          >
            {day}
          </Styled.Day>
          <RenderFoodList
            foods={mealPlan[day as keyof typeof mealPlan]}
            onClick={removeFoodFromDay}
          />
        </>
      ))}
    </>
  );
};

export default App;
