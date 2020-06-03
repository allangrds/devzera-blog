import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'

import './reset.css'
import style from './style.module.css'

import Header from '../Header'
import Menu from '../Menu'

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main className={style.main}>
      <div className={style.container}>
        { children }
      </div>
    </main>
    <Menu />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(Layout)
