/* @flow */

import type {Store, Item} from 'src/store-types';

import React, {Component} from 'react';
import {Link} from 'react-router';
import {bgImage} from 'src/services/utils';
import withStore from 'src/flux/with-store.jsx';

import css from './feed.css';

import Animation from 'src/components/animation.jsx';

type Props = {
  store: Store,
};

const Feed = ({store}: Props) => (
  <div className={css.bg}>
    <div className={css.scroll}>
      <div className={css.feed}>
        { store.feed.map(id => (
          <Toy key={id} toy={store.items[id]} />
        )) }
      </div>
    </div>
  </div>
);

export default withStore()(Feed);


const Toy = ({toy: {name, text, image, url}}) => (
  <a className={css.toy} href={url}>
    <div className={css.toyImg} style={bgImage(image)}>
      <div><span className={css.name}>{name}</span></div>
      <pre className={css.toyText}>{text.trim()}</pre>
    </div>
  </a>
);

