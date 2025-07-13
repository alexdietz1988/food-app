import { type Food } from './types';

import apple from './assets/apple.png';
import asparagus from './assets/asparagus.png';
import avocado from './assets/avocado.png';
import banana from './assets/banana.png';
import beets from './assets/beets.png';
import bellPeppers from './assets/bell-peppers.png';
import blackberries from './assets/blackberries.png';
import blueberries from './assets/blueberries.png';
import cabbage from './assets/cabbage.png';
import cantaloupe from './assets/cantaloupe.png';
import carrots from './assets/carrots.png';
import celery from './assets/celery.png';
import cherries from './assets/cherries.png';
import collardGreens from './assets/collard-greens.png';
import corn from './assets/corn.png';
import cucumber from './assets/cucumber.png';
import eggplant from './assets/eggplant.png';
import garlic from './assets/garlic.png';
import greenBeans from './assets/green-beans.png';
import herbs from './assets/herbs.png';
import honeydewMelon from './assets/honeydew-melon.png';
import kale from './assets/kale.png';
import kiwi from './assets/kiwi.png';
import lemon from './assets/lemon.png';
import peach from './assets/peach.png';
import summerSquash from './assets/summer-squash.png';
import tomatoes from './assets/tomatoes.png';

export const foods: Food[] = [
  { name: 'apples', image: apple, seasons: ['spring'] },
  { name: 'apricots', image: '', seasons: ['spring'] },
  { name: 'asparagus', image: asparagus, seasons: ['spring'] },
  { name: 'cabbage', image: cabbage, seasons: ['spring'] },
  { name: 'collard greens', image: collardGreens, seasons: ['spring'] },

  {
    name: 'avocado',
    image: avocado,
    seasons: ['spring', 'summer'],
  },
  {
    name: 'bananas',

    image: banana,
    seasons: ['spring', 'summer'],
  },
  {
    name: 'beets',

    image: beets,
    seasons: ['summer'],
  },
  {
    name: 'bell peppers',

    image: bellPeppers,
    seasons: ['summer'],
  },
  {
    name: 'blackberries',

    image: blackberries,
    seasons: ['spring', 'summer'],
  },
  {
    name: 'blueberries',

    image: blueberries,
    seasons: ['summer'],
  },
  { name: 'broccoli', image: '', seasons: ['spring'] },
  {
    name: 'cantaloupe',

    image: cantaloupe,
    seasons: ['summer'],
  },
  {
    name: 'carrots',

    image: carrots,
    seasons: ['spring', 'summer'],
  },
  {
    name: 'celery',

    image: celery,
    seasons: ['spring', 'summer'],
  },
  {
    name: 'cherries',

    image: cherries,
    seasons: ['summer'],
  },
  {
    name: 'corn',

    image: corn,
    seasons: ['summer'],
  },
  {
    name: 'cucumbers',

    image: cucumber,
    seasons: ['summer'],
  },
  {
    name: 'eggplant',

    image: eggplant,
    seasons: ['summer'],
  },
  {
    name: 'garlic',

    image: garlic,
    seasons: ['spring', 'summer'],
  },
  {
    name: 'green beans',

    image: greenBeans,
    seasons: ['summer'],
  },
  {
    name: 'herbs',

    image: herbs,
    seasons: ['spring', 'summer'],
  },
  {
    name: 'honeydew melon',

    image: honeydewMelon,
    seasons: ['summer'],
  },
  { name: 'kale', image: kale, seasons: ['spring'] },
  { name: 'kiwifruit', image: kiwi, seasons: ['spring'] },
  {
    name: 'lemons',

    image: lemon,
    seasons: ['spring', 'summer'],
  },
  { name: 'lettuce', image: '', seasons: ['spring'] },
  { name: 'lima beans', image: '', seasons: ['summer'] },
  { name: 'limes', image: '', seasons: ['spring', 'summer'] },
  { name: 'mangos', image: '', seasons: ['summer'] },
  { name: 'mushrooms', image: '', seasons: ['spring'] },
  { name: 'okra', image: '', seasons: ['summer'] },
  { name: 'onions', image: '', seasons: ['spring', 'summer'] },
  { name: 'peaches', image: peach, seasons: ['summer'] },
  { name: 'pears', image: '', seasons: ['summer'] },
  { name: 'peas', image: '', seasons: ['spring', 'summer'] },
  { name: 'pineapples', image: '', seasons: ['spring', 'summer'] },
  { name: 'plantains', image: '', seasons: ['spring', 'summer'] },
  { name: 'plums', image: '', seasons: ['summer'] },
  { name: 'radishes', image: '', seasons: ['spring'] },
  { name: 'raspberries', image: '', seasons: ['summer'] },
  { name: 'rhubarb', image: '', seasons: ['spring'] },
  { name: 'spinach', image: '', seasons: ['spring'] },
  { name: 'strawberries', image: '', seasons: ['spring', 'summer'] },
  {
    name: 'summer squash',

    image: summerSquash,
    seasons: ['summer'],
  },
  { name: 'swiss chard', image: '', seasons: ['spring'] },
  { name: 'tomatillos', image: '', seasons: ['summer'] },
  {
    name: 'tomatoes',

    image: tomatoes,
    seasons: ['summer'],
  },
  { name: 'turnips', image: '', seasons: ['spring'] },
  { name: 'watermelon', image: '', seasons: ['summer'] },
  { name: 'zucchini', image: '', seasons: ['summer'] },
];
