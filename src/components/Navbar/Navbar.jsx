import React from 'react'
import style from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <a href="/" className={style.navTitle}>
        React Apps
      </a>
      <ul>
        <li>
          <a href="/naruto">Naruto</a>
        </li>
        <li>
          <a href="/movie">Movies</a>
        </li>
        <li>
          <a href="/recipe">Recipes</a>
        </li>
      </ul>
    </nav>
  );
}
