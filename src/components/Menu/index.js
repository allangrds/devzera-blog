import React, { memo } from 'react'
import { Link } from 'gatsby'

import HomeIcon from '../../assets/images/home.svg'
import SearchIcon from '../../assets/images/search.svg'
import SectionIcon from '../../assets/images/section.svg'
import AboutIcon from '../../assets/images/about.svg'
import style from './style.module.css'

const Menu = () => (
  <nav className={style.navigation}>
    <Link
      to="/"
      className={style.link}
    >
      <HomeIcon
        fill="#292C2B"
        width="1rem"
        height="1rem"
      />
      <span className={style.name}>
        Home
      </span>
    </Link>
    <Link
      to="/search"
      className={style.link}
    >
      <SearchIcon
        fill="#292C2B"
        width="1rem"
        height="1rem"
      />
      <span className={style.name}>
        Pesquisar
      </span>
    </Link>
    <Link
      to="/sections"
      className={style.link}
    >
      <SectionIcon
        fill="#292C2B"
        width="1rem"
        height="1rem"
      />
      <span className={style.name}>
        Seções
      </span>
    </Link>
    <Link
      to="/about"
      className={style.link}
    >
      <AboutIcon
        fill="#292C2B"
        width="1rem"
        height="1rem"
      />
      <span className={style.name}>
        Sobre
      </span>
    </Link>
  </nav>
)

export default memo(Menu)
