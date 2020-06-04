import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './reset.css'
import style from './style.module.css'

import Header from '../Header'
import Menu from '../Menu'

const Layout = ({ children, whiteBackground }) => {
  const mainClassName = classNames(
    style.main,
    {
      [style.white]: whiteBackground,
    },
  )

  return (
    <Fragment>
      <Header />
      <main className={mainClassName}>
        <div className={style.container}>
          { children }
        </div>
      </main>
      <Menu />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  whiteBackground: PropTypes.bool,
}

Layout.defaultProps = {
  whiteBackground: false,
}

export default memo(Layout)
