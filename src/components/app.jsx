/* @flow */

import React from 'react';
import {Link} from 'react-router';

import './base.global.css';
import css from './app.css';


type Props = {
  children: Object,
};

export default function App({children}: Props) {
  return <div className={css.top}>
    <div className={css.headerFixed}>
      <header className={css.header}>
        <div className={css.headerContainer}>
          <Link to="/">
            <h1 className={css.title}>Toycast</h1>
          </Link>
        </div>
      </header>
      <h1 className={css.titlePlaceholder}>Toycast</h1>
      <div className={css.aboutLink}>
        <Link to="/about">About</Link>
      </div>
    </div>
    {children}
  </div>;
}

