import * as Styled from './MealPlan.styles';
import FoodList from '../FoodList/FoodList';
import { days, type Food } from '../types';

const MealPlan = ({
  setSelectedDay,
  selectedDay,
  mealPlan,
  removeFoodFromDay,
}: {
  setSelectedDay: (day: string) => void;
  selectedDay: string;
  mealPlan: {
    [key: string]: { name: string; category?: string; seasons?: string[] }[];
  };
  removeFoodFromDay: (food: Food) => void;
}) => (
  <div>
    <Styled.H1>Meal Plan</Styled.H1>
    <Styled.MealPlan>
      {days.map((day) => (
        <>
          <Styled.Day
            onClick={() => setSelectedDay(day)}
            selected={selectedDay === day}
          >
            <p>{day}</p>
            <FoodList
              foods={mealPlan[day as keyof typeof mealPlan] as Food[]}
              onClick={removeFoodFromDay}
            />
          </Styled.Day>
        </>
      ))}
    </Styled.MealPlan>
  </div>
);

export default MealPlan;
