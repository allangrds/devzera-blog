import React, { memo } from 'react'
import { Link } from 'gatsby'

import FaceboookIcon from '../../assets/images/facebook.svg'
import InstagramIcon from '../../assets/images/instagram.svg'
import TwitterIcon from '../../assets/images/twitter.svg'
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
        <div className={style.social_media}>
          <a href="/" target="_blank">
            <FaceboookIcon
              fill="white"
              width="1.5rem"
              height="1.5rem"
            />
          </a>
          <a href="/" target="_blank">
            <TwitterIcon
              fill="white"
              width="1.5rem"
              height="1.5rem"
            />
          </a>
          <a href="/" target="_blank">
            <InstagramIcon
              fill="white"
              width="1.5rem"
              height="1.5rem"
            />
          </a>
        </div>
      </nav>
    </div>
  </header>
)

export default memo(Header)
