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
import cauliflower from './assets/cauliflower.png';
import cranberries from './assets/cranberries.png';
import celery from './assets/celery.png';
import cherries from './assets/cherries.png';
import collardGreens from './assets/collard-greens.png';
import corn from './assets/corn.png';
import cucumber from './assets/cucumber.png';
import eggplant from './assets/eggplant.png';
import garlic from './assets/garlic.png';
import ginger from './assets/ginger.png';
import grapefruit from './assets/grapefruit.png';
import grapes from './assets/grapes.png';
import greenBeans from './assets/green-beans.png';
import herbs from './assets/herbs.png';
import honeydewMelon from './assets/honeydew-melon.png';
import kale from './assets/kale.png';
import kiwi from './assets/kiwi.png';
import leek from './assets/leek.png';
import lemon from './assets/lemon.png';
import lettuce from './assets/lettuce.png';
import limaBeans from './assets/lima-beans.png';
import lime from './assets/lime.png';
import mango from './assets/mango.png';
import mushrooms from './assets/mushrooms.png';
import okra from './assets/okra.png';
import onion from './assets/onion.png';
import orange from './assets/orange.png';
import parsnip from './assets/parsnip.png';
import peach from './assets/peach.png';
import pear from './assets/pear.png';
import peas from './assets/peas.png';
import pineapple from './assets/pineapple.png';
import plantain from './assets/plantain.png';
import plum from './assets/plum.png';
import pomegranate from './assets/pomegranate.png';
import potato from './assets/potato.png';
import pumpkin from './assets/pumpkin.png';
import radish from './assets/radish.png';
import raspberries from './assets/raspberries.png';
import rhubarb from './assets/rhubarb.png';
import rutabaga from './assets/rutabaga.png';
import spinach from './assets/spinach.png';
import strawberry from './assets/strawberry.png';
import summerSquash from './assets/summer-squash.png';
import sweetPotato from './assets/sweet-potato.png';
import swissChard from './assets/swiss-chard.png';
import tomatoes from './assets/tomatoes.png';

export const foods: Food[] = [
  { name: 'apples', image: apple, seasons: ['spring', 'fall', 'winter'] },
  { name: 'apricots', image: apricot, seasons: ['spring'] },
  { name: 'asparagus', image: asparagus, seasons: ['spring'] },

  {
    name: 'avocado',
    image: avocado,
    seasons: ['spring', 'summer', 'winter'],
  },
  {
    name: 'bananas',

    image: banana,
    seasons: ['spring', 'summer', 'fall', 'winter'],
  },
  {
    name: 'beets',

    image: beets,
    seasons: ['summer', 'fall', 'winter'],
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
  {
    name: 'brussels sprouts',
    image: brusselsSprouts,
    seasons: ['fall', 'winter'],
  },
  { name: 'cabbage', image: cabbage, seasons: ['spring', 'fall', 'winter'] },

  {
    name: 'cantaloupe',

    image: cantaloupe,
    seasons: ['summer'],
  },
  {
    name: 'carrots',

    image: carrots,
    seasons: ['spring', 'summer', 'fall', 'winter'],
  },
  { name: 'cauliflower', image: cauliflower, seasons: ['fall'] },
  { name: 'cranberries', image: cranberries, seasons: ['fall'] },
  {
    name: 'celery',

    image: celery,
    seasons: ['spring', 'summer', 'fall', 'winter'],
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
    name: 'collard greens',
    image: collardGreens,
    seasons: ['spring', 'fall', 'winter'],
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
    seasons: ['spring', 'summer', 'fall'],
  },
  { name: 'ginger', image: ginger, seasons: ['fall'] },
  { name: 'grapefruit', image: grapefruit, seasons: ['winter'] },
  { name: 'grapes', image: grapes, seasons: ['fall'] },
  {
    name: 'green beans',

    image: greenBeans,
    seasons: ['summer', 'fall'],
  },
  {
    name: 'herbs',

    image: herbs,
    seasons: ['spring', 'summer', 'fall', 'winter'],
  },
  {
    name: 'honeydew melon',

    image: honeydewMelon,
    seasons: ['summer'],
  },
  { name: 'kale', image: kale, seasons: ['spring', 'fall', 'winter'] },
  { name: 'kiwifruit', image: kiwi, seasons: ['spring', 'fall', 'winter'] },
  { name: 'leeks', image: leek, seasons: ['winter'] },
  {
    name: 'lemons',

    image: lemon,
    seasons: ['spring', 'summer', 'fall', 'winter'],
  },
  { name: 'lettuce', image: lettuce, seasons: ['spring', 'fall'] },
  { name: 'lima beans', image: limaBeans, seasons: ['summer'] },
  {
    name: 'limes',
    image: lime,
    seasons: ['spring', 'summer', 'fall', 'winter'],
  },
  { name: 'mangos', image: mango, seasons: ['summer', 'fall'] },
  { name: 'mushrooms', image: mushrooms, seasons: ['spring', 'fall'] },
  { name: 'okra', image: okra, seasons: ['summer', 'fall'] },
  {
    name: 'onions',
    image: onion,
    seasons: ['spring', 'summer', 'fall', 'winter'],
  },
  { name: 'oranges', image: orange, seasons: ['winter'] },
  { name: 'parsnips', image: parsnip, seasons: ['fall', 'winter'] },
  { name: 'peaches', image: peach, seasons: ['summer'] },
  { name: 'pears', image: pear, seasons: ['summer', 'fall', 'winter'] },
  { name: 'peas', image: peas, seasons: ['spring', 'summer', 'fall'] },
  { name: 'pineapples', image: pineapple, seasons: ['spring', 'summer'] },
  {
    name: 'plantains',
    image: plantain,
    seasons: ['spring', 'summer', 'fall', 'winter'],
  },
  { name: 'plums', image: plum, seasons: ['summer'] },
  { name: 'pomegranates', image: pomegranate, seasons: ['fall', 'winter'] },
  { name: 'potatoes', image: potato, seasons: ['fall', 'winter'] },
  { name: 'pumpkin', image: pumpkin, seasons: ['fall', 'winter'] },
  { name: 'radishes', image: radish, seasons: ['spring', 'fall'] },
  { name: 'raspberries', image: raspberries, seasons: ['summer', 'fall'] },
  { name: 'rhubarb', image: rhubarb, seasons: ['spring'] },
  { name: 'rutabagas', image: rutabaga, seasons: ['fall', 'winter'] },
  { name: 'spinach', image: spinach, seasons: ['spring', 'fall'] },
  {
    name: 'strawberries',
    image: strawberry,
    seasons: ['spring', 'summer', 'fall'],
  },
  {
    name: 'summer squash',

    image: summerSquash,
    seasons: ['summer'],
  },
  {
    name: 'sweet potatoes & yams',
    image: sweetPotato,
    seasons: ['fall', 'winter'],
  },
  {
    name: 'swiss chard',
    image: swissChard,
    seasons: ['spring', 'fall', 'winter'],
  },
  { name: 'tomatillos', image: '', seasons: ['summer'] },
  {
    name: 'tomatoes',

    image: tomatoes,
    seasons: ['summer'],
  },
  { name: 'turnips', image: '', seasons: ['spring', 'fall', 'winter'] },
  { name: 'watermelon', image: '', seasons: ['summer'] },
  { name: 'winter squash', image: '', seasons: ['fall', 'winter'] },
  { name: 'zucchini', image: '', seasons: ['summer'] },
];
