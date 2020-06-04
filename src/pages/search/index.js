import React, { memo } from 'react'

import Layout from '../../components/Layout'
import Search from '../../components/Search'
import SEO from '../../components/Seo'

const SearchPage = () => (
  <Layout>
    <SEO title="Pesquisar posts" />
    <Search />
  </Layout>
)

export default memo(SearchPage)
