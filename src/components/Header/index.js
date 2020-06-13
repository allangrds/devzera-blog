import React, { memo } from 'react'
import { Link } from 'gatsby'

import FaceboookIcon from '../../assets/images/facebook.svg'
import InstagramIcon from '../../assets/images/instagram.svg'
import TwitterIcon from '../../assets/images/twitter.svg'
import RssIcon from '../../assets/images/rss.svg'
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
          {/* <li className={style.item}>
            <Link to="/sections" className={style.link}>
              Seções
            </Link>
          </li> */}
          <li className={style.item}>
            <Link to="/about" className={style.link}>
              Sobre
            </Link>
          </li>
          <li className={style.item}>
            <Link to="/search" className={style.link}>
              Pesquisar
            </Link>
          </li>
        </ul>
        <div className={style.social_media}>
          <a
            href="https://www.facebook.com/Devzera-107366934342545/"
            target="_blank"
            rel="noreferrer"
          >
            <FaceboookIcon
              fill="white"
              width="1.5rem"
              height="1.5rem"
            />
          </a>
          <a
            href="https://twitter.com/devzera1"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon
              fill="white"
              width="1.5rem"
              height="1.5rem"
            />
          </a>
          {/* <a href="/" target="_blank">
            <InstagramIcon
              fill="white"
              width="1.5rem"
              height="1.5rem"
            />
          </a> */}
          <a href="/rss.xml" target="_blank">
            <RssIcon
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
