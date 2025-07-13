import { type Food } from './types';

import apple from './assets/apple.png';
import apricot from './assets/apricot.png';
import asparagus from './assets/asparagus.png';
import avocado from './assets/avocado.png';
import banana from './assets/banana.png';
import beets from './assets/beets.png';
import bellPeppers from './assets/bell-peppers.png';
import blackberries from './assets/blackberries.png';
import blueberries from './assets/blueberries.png';
import broccoli from './assets/broccoli.png';
import brusselsSprouts from './assets/brussels-sprouts.png';
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
import lettuce from './assets/lettuce.png';
import limaBeans from './assets/lima-beans.png';
import lime from './assets/lime.png';
import mango from './assets/mango.png';
import peach from './assets/peach.png';
import summerSquash from './assets/summer-squash.png';
import tomatoes from './assets/tomatoes.png';

export const foods: Food[] = [
  { name: 'apples', image: apple, seasons: ['spring', 'fall'] },
  { name: 'apricots', image: apricot, seasons: ['spring'] },
  { name: 'asparagus', image: asparagus, seasons: ['spring'] },

  {
    name: 'avocado',
    image: avocado,
    seasons: ['spring', 'summer'],
  },
  {
    name: 'bananas',

    image: banana,
    seasons: ['spring', 'summer', 'fall'],
  },
  {
    name: 'beets',

    image: beets,
    seasons: ['summer', 'fall'],
  },
  {
    name: 'bell peppers',

    image: bellPeppers,
    seasons: ['summer', 'fall'],
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
  { name: 'broccoli', image: broccoli, seasons: ['spring', 'fall'] },
  { name: 'brussels sprouts', image: brusselsSprouts, seasons: ['fall'] },
  { name: 'cabbage', image: cabbage, seasons: ['spring', 'fall'] },

  {
    name: 'cantaloupe',

    image: cantaloupe,
    seasons: ['summer'],
  },
  {
    name: 'carrots',

    image: carrots,
    seasons: ['spring', 'summer', 'fall'],
  },
  { name: 'cauliflower', image: '', seasons: ['fall'] },
  { name: 'cranberries', image: '', seasons: ['fall'] },
  {
    name: 'celery',

    image: celery,
    seasons: ['spring', 'summer', 'fall'],
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
  { name: 'collard greens', image: collardGreens, seasons: ['spring', 'fall'] },
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
    seasons: ['spring', 'summer', 'fall'],
  },
  { name: 'ginger', image: '', seasons: ['fall'] },
  { name: 'grapes', image: '', seasons: ['fall'] },
  {
    name: 'green beans',

    image: greenBeans,
    seasons: ['summer', 'fall'],
  },
  {
    name: 'herbs',

    image: herbs,
    seasons: ['spring', 'summer', 'fall'],
  },
  {
    name: 'honeydew melon',

    image: honeydewMelon,
    seasons: ['summer'],
  },
  { name: 'kale', image: kale, seasons: ['spring', 'fall'] },
  { name: 'kiwifruit', image: kiwi, seasons: ['spring', 'fall'] },
  {
    name: 'lemons',

    image: lemon,
    seasons: ['spring', 'summer', 'fall'],
  },
  { name: 'lettuce', image: lettuce, seasons: ['spring', 'fall'] },
  { name: 'lima beans', image: limaBeans, seasons: ['summer'] },
  { name: 'limes', image: lime, seasons: ['spring', 'summer', 'fall'] },
  { name: 'mangos', image: mango, seasons: ['summer', 'fall'] },
  { name: 'mushrooms', image: '', seasons: ['spring', 'fall'] },
  { name: 'okra', image: '', seasons: ['summer', 'fall'] },
  { name: 'onions', image: '', seasons: ['spring', 'summer', 'fall'] },
  { name: 'peaches', image: peach, seasons: ['summer'] },
  { name: 'peas', image: '', seasons: ['spring', 'summer', 'fall'] },
  { name: 'pears', image: '', seasons: ['summer', 'fall'] },
  { name: 'pineapples', image: '', seasons: ['spring', 'summer'] },
  { name: 'plantains', image: '', seasons: ['spring', 'summer', 'fall'] },
  { name: 'plums', image: '', seasons: ['summer'] },
  { name: 'parsnips', image: '', seasons: ['fall'] },
  { name: 'pomegranates', image: '', seasons: ['fall'] },
  { name: 'potatoes', image: '', seasons: ['fall'] },
  { name: 'pumpkin', image: '', seasons: ['fall'] },
  { name: 'radishes', image: '', seasons: ['spring', 'fall'] },
  { name: 'raspberries', image: '', seasons: ['summer', 'fall'] },
  { name: 'rhubarb', image: '', seasons: ['spring'] },
  { name: 'rutabagas', image: '', seasons: ['fall'] },
  { name: 'spinach', image: '', seasons: ['spring', 'fall'] },
  { name: 'strawberries', image: '', seasons: ['spring', 'summer', 'fall'] },
  {
    name: 'summer squash',

    image: summerSquash,
    seasons: ['summer'],
  },
  { name: 'sweet potatoes & yams', image: '', seasons: ['fall'] },
  { name: 'swiss chard', image: '', seasons: ['spring', 'fall'] },
  { name: 'tomatillos', image: '', seasons: ['summer'] },
  {
    name: 'tomatoes',

    image: tomatoes,
    seasons: ['summer'],
  },
  { name: 'turnips', image: '', seasons: ['spring', 'fall'] },
  { name: 'watermelon', image: '', seasons: ['summer'] },
  { name: 'winter squash', image: '', seasons: ['fall'] },
  { name: 'zucchini', image: '', seasons: ['summer'] },
];
