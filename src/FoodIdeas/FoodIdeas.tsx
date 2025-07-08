import * as Styled from './FoodIdeas.styles';
import FoodList from '../FoodList/FoodList';
import { type Season, type Food } from '../types';

interface FoodIdeasProps {
  selectedSeason: Season;
  setSelectedSeason: (season: Season) => void;
  foods: Food[];
  addFoodToDay: (food: Food) => void;
}

const FoodIdeas = ({
  selectedSeason,
  setSelectedSeason,
  foods,
  addFoodToDay,
}: FoodIdeasProps) => (
  <div>
    <Styled.H1>Food Ideas</Styled.H1>
    <Styled.FiltersContainer>
      <Styled.Filter>
        <h2>Seasons:</h2>
        {['all', 'spring', 'summer', 'fall', 'winter'].map((season) => (
          <Styled.FilterLabel
            onClick={() => setSelectedSeason(season as Season)}
            selected={selectedSeason === season}
          >
            {season}
          </Styled.FilterLabel>
        ))}
      </Styled.Filter>
      <Styled.Filter>
        <h2>Nutrients:</h2>
        {['protein', 'carbs', 'veggies', 'sweets', 'restaurants'].map(
          (category) => (
            <Styled.FilterLabel key={category} selected={false}>
              {category}
            </Styled.FilterLabel>
          )
        )}
      </Styled.Filter>
    </Styled.FiltersContainer>
    <FoodList
      foods={foods.filter(
        (food) =>
          selectedSeason === 'all' || food.seasons?.includes(selectedSeason)
      )}
      onClick={addFoodToDay}
    />
  </div>
);

export default FoodIdeas;
