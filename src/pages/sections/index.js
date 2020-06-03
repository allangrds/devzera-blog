import React, { memo } from 'react'

import Layout from '../../components/Layout'

import style from './style.module.css'

const AboutPage = () => (
  <Layout>
    <h1 className={style.title}>Seções</h1>
  </Layout>
)

export default memo(AboutPage)
