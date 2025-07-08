import * as Styled from './FoodList.styles';
import { type Food } from '../types';

interface FoodListProps {
  foods: Food[];
  onClick: (food: Food) => void;
}

const FoodList = ({ foods, onClick }: FoodListProps) => (
  <Styled.FoodList>
    {foods.map((food) => (
      <Styled.Food onClick={() => onClick(food)} key={food.name}>
        <h1>{food.name}</h1>
        <h2>{food.nutrient ? ` ${food.nutrient}` : ''}</h2>
        <h2>{food.seasons ? `${food.seasons}` : ''}</h2>
        <h2>{food.category ? ` ${food.category}` : ''}</h2>
      </Styled.Food>
    ))}
  </Styled.FoodList>
);

export default FoodList;
