import React, { memo } from 'react'
import { Link } from 'gatsby'

import './style.css'

const Header = () => (
  <header className="header">
    <div className="content">
      <h1 className="title">
        Devzera
      </h1>
      <h2 className="subtitle">
        Aprendendo e compartilhando tecnologia
      </h2>
      <nav className="navigation">
        <ul className="list">
          <li className="item">
            <Link to="/" activeClassName="link">
              Home
            </Link>
          </li>
          <li className="item">
            <Link to="/sections" activeClassName="link">
              Seções
            </Link>
          </li>
          <li className="item">
            <Link to="/about" activeClassName="link">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default memo(Header)
