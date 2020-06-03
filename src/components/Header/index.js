import React, { memo } from 'react'
import { Link } from 'gatsby'

import style from './style.module.css'

const Header = () => (
  <header className={style.header}>
    <div className={style.content}>
      <h1 className={style.title}>
        Devzera
      </h1>
      <h2 className={style.subtitle}>
        Aprendendo e compartilhando tecnologia
      </h2>
      <nav className={style.navigation}>
        <ul className={style.list}>
          <li className={style.item}>
            <Link to="/" className={style.link}>
              Home
            </Link>
          </li>
          <li className={style.item}>
            <Link to="/" className={style.link}>
              Seções
            </Link>
          </li>
          <li className={style.item}>
            <Link to="/about" className={style.link}>
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default memo(Header)
