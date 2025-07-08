import * as Styled from './FoodIdeas.styles';
import FoodList from '../FoodList/FoodList';
import { type Food, type Filter, seasons, nutrients } from '../types';

interface FoodIdeasProps {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  foods: Food[];
  addFoodToDay: (food: Food) => void;
}

const FoodIdeas = ({
  filter,
  setFilter,
  foods,
  addFoodToDay,
}: FoodIdeasProps) => (
  <div>
    <Styled.H1>Food Ideas</Styled.H1>
    <Styled.FiltersContainer>
      <Styled.Filter>
        <h2>Seasons:</h2>
        {seasons.map((season) => (
          <Styled.FilterLabel
            onClick={() => setFilter((prev) => ({ ...prev, season }))}
            selected={filter.season === season}
          >
            {season}
          </Styled.FilterLabel>
        ))}
      </Styled.Filter>
      <Styled.Filter>
        <h2>Nutrients:</h2>
        {nutrients.map((nutrient) => (
          <Styled.FilterLabel
            onClick={() => setFilter((prev) => ({ ...prev, nutrient }))}
            selected={filter.nutrient === nutrient}
          >
            {nutrient}
          </Styled.FilterLabel>
        ))}
      </Styled.Filter>
    </Styled.FiltersContainer>
    <FoodList foods={foods} onClick={addFoodToDay} />
  </div>
);

export default FoodIdeas;
