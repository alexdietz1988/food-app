import { type Food } from './types';

import kale from './assets/kale.png';
import cookies from './assets/cookies.png';
import summerSquash from './assets/summer-squash.png';
import rice from './assets/rice.png';
import beans from './assets/beans.png';
import pizza from './assets/pizza.png';
import spaghetti from './assets/spaghetti.png';
import burger from './assets/burger.png';
import chipotle from './assets/chipotle.png';
import macAndCheese from './assets/mac-and-cheese.png';
import chili from './assets/chili.png';
import gnocchi from './assets/gnocchi.png';
import salad from './assets/salad.png';

export const foods: Food[] = [
  { name: 'burger', nutrient: 'protein', image: burger },
  { name: 'chili', nutrient: 'protein', image: chili },
  { name: 'beans', nutrient: 'protein', image: beans },
  { name: 'gnocchi', nutrient: 'carbs', image: gnocchi },
  { name: 'spaghetti', nutrient: 'carbs', image: spaghetti },
  { name: 'mac and cheese', nutrient: 'carbs', image: macAndCheese },
  { name: 'pizza', nutrient: 'carbs', image: pizza },
  { name: 'rice', nutrient: 'carbs', image: rice },
  { name: 'salad', nutrient: 'veggies', image: salad },
  { name: 'roasted veggies', nutrient: 'veggies' },
  { name: 'roasted butternut squash salad', nutrient: 'veggies' },
  { name: 'chocolate-chip cookies', category: 'sweets', image: cookies },
  { name: 'chipotle', category: 'restaurants', image: chipotle },
  {
    name: 'summer squash',
    nutrient: 'veggies',
    seasons: ['summer'],
    image: summerSquash,
  },
  { name: 'kale', nutrient: 'veggies', seasons: ['winter'], image: kale },
];
