import React, { memo } from 'react'

import Layout from '../../components/Layout'
import Search from '../../components/Search'

import style from './style.module.css'

const SearchPage = () => (
  <Layout>
    <Search />
  </Layout>
)

export default memo(SearchPage)
