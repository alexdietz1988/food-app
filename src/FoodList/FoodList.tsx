import * as Styled from './FoodList.styles';
import { type Food } from '../types';

interface FoodListProps {
  foods: Food[];
}

const FoodList = ({ foods }: FoodListProps) => (
  <Styled.FoodList>
    {foods.map((food) => (
      <Styled.Food key={food.name}>
        {food.image && <img src={food.image} alt={food.name} />}
        <h1>{food.name}</h1>
        <h2>{food.nutrient ? ` ${food.nutrient}` : ''}</h2>
        <h2>{food.seasons ? `${food.seasons}` : ''}</h2>
        <h2>{food.category ? ` ${food.category}` : ''}</h2>
      </Styled.Food>
    ))}
  </Styled.FoodList>
);

export default FoodList;
