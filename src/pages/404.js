import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Página não encontrada" />
    <h1>Página não encontrada</h1>
    <p>Ops...não tem nada aqui</p>
  </Layout>
)

export default NotFoundPage
