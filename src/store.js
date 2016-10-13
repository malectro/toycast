/* @flow */

import type {Store} from './store-types';

const store: Store = {
  items: {
    '4': {
      id: 1,
      name: 'Oscicube',
      url: '/toys/oscicube',
      image: '/images/cube.png',
      text: `Spinnable oscilating cube

Drag and flick the cube horizontally
      `,
    },
    '1': {
      id: 1,
      name: 'Crumbler',
      url: '/toys/crumbler',
      image: '/images/crumbler.png',
      text: `Touch screen app to control an evolving set of oscillators

Controls
Touch Down to play.
Move x to control frequency.
Move y to control cutoff.
Press harder to control velocity.
      `,
    },
    '2': {
      id: 2,
      name: 'Sequence',
      url: '/toys/sequence',
      image: '/images/sequence.png',
      text: `Large-scale, primitive sequencer with destortion and feedback

Controls
Tap a square to queue a note.
y position controls frequency.
x position controls time.
      `,
    },
    '3': {
      id: 3,
      name: 'Mixing Pool',
      url: '/toys/mixing-pool',
      image: '/images/ripple.png',
      text: `Tappable ripple pool that mixes colors`,
    },
  },
  feed: [
    '1',
    '2',
    '3',
  ],
};


export default store;

