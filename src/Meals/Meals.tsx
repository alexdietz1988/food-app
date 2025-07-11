import FoodList from '../FoodList/FoodList';
import { type Food } from '../types';

const Meals = ({ foods }: { foods: Food[] }) => {
  const meals = [
    {
      name: 'Spaghetti with Tomato Sauce',
      ingredients: ['spaghetti', 'tomatoes'],
    },
  ];
  return (
    <>
      {meals.map((meal) => (
        <>
          <div>{meal.name}</div>
          <FoodList
            foods={foods.filter((food) => meal.ingredients.includes(food.name))}
          />
        </>
      ))}
    </>
  );
};

export default Meals;
