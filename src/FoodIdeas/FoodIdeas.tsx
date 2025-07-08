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
    <div>
      <h2>Seasons:</h2>
      <Styled.SeasonsContainer>
        {['all', 'spring', 'summer', 'fall', 'winter'].map((season) => (
          <Styled.SeasonLabel
            onClick={() => setSelectedSeason(season as Season)}
            selected={selectedSeason === season}
          >
            {season}
          </Styled.SeasonLabel>
        ))}
      </Styled.SeasonsContainer>
    </div>
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
