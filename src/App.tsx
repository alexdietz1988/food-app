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
  const [selectedFood, setSelectedFood] = useState<Food[]>([]);
  const addFood = (food: Food) => setSelectedFood((prev) => [...prev, food]);
  const removeFood = (food: Food) =>
    setSelectedFood((prev) => [...prev].filter((f) => f.name !== food.name));
  return (
    <>
      <RenderFoodList foods={foods} onClick={addFood} />
      <hr />
      <h2>Monday</h2>
      <RenderFoodList foods={selectedFood} onClick={removeFood} />
    </>
  );
};

export default App;
