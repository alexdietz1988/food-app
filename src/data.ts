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
import tofu from './assets/tofu.png';
import eggplant from './assets/eggplant.png';
import broccoli from './assets/broccoli.png';
import bananas from './assets/bananas.png';
import avocadoes from './assets/avocadoes.png';
import spinach from './assets/spinach.png';
import carrots from './assets/carrots.png';
import tomatoes from './assets/tomatoes.png';

const greens: Food[] = [
  { name: 'kale', nutrient: 'greens', seasons: ['winter'], image: kale },
  { name: 'spinach', nutrient: 'greens', image: spinach },
  {
    name: 'broccoli',
    nutrient: 'greens',
    image: broccoli,
    seasons: ['summer', 'fall'],
  },
  {
    name: 'brussels sprouts',
    nutrient: 'greens',
    image: '',
    seasons: ['fall'],
  },
];

const veggies: Food[] = [
  {
    name: 'summer squash',
    nutrient: 'veggies',
    seasons: ['summer'],
    image: summerSquash,
  },

  {
    name: 'eggplant',
    nutrient: 'veggies',
    image: eggplant,
    seasons: ['summer'],
  },
  { name: 'corn', nutrient: 'veggies', image: '', seasons: ['summer'] },
  {
    name: 'carrots',
    nutrient: 'veggies',
    image: carrots,
    seasons: ['summer', 'fall'],
  },
];

const fruits: Food[] = [
  {
    name: 'apples',
    nutrient: 'fruits',
    image: '',
    seasons: ['summer', 'fall'],
  },
  { name: 'bananas', nutrient: 'fruits', image: bananas },
  { name: 'avocados', nutrient: 'fruits', image: avocadoes },
  { name: 'tomatoes', nutrient: 'fruits', image: tomatoes, seasons: ['fall'] },
];

const proteins: Food[] = [
  { name: 'tofu', nutrient: 'protein', image: tofu },
  { name: 'burger', nutrient: 'protein', image: burger },
  { name: 'chili', nutrient: 'protein', image: chili },
  { name: 'beans', nutrient: 'protein', image: beans },
];

const carbs: Food[] = [
  { name: 'gnocchi', nutrient: 'carbs', image: gnocchi },
  { name: 'spaghetti', nutrient: 'carbs', image: spaghetti },
  { name: 'mac and cheese', nutrient: 'carbs', image: macAndCheese },
  { name: 'pizza', nutrient: 'carbs', image: pizza },
  { name: 'rice', nutrient: 'carbs', image: rice },
];

const sweets: Food[] = [
  { name: 'chocolate-chip cookies', nutrient: 'sweets', image: cookies },
];

const restaurants: Food[] = [
  { name: 'chipotle', category: 'restaurants', image: chipotle },
];

export const foods: Food[] = [
  ...greens,
  ...veggies,
  ...fruits,
  ...proteins,
  ...carbs,
  ...sweets,
  ...restaurants,
];
