import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'

import './reset.css'
import Header from '../header'

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <main>
      { children }
    </main>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(Layout)
