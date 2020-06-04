import React, { memo } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

import style from './style.module.css'

const Comments = ({ url, title }) => {
  const completeUrl = `http://blog.devzera.com.br${url}`

  return (
    <section className={style.wrapper}>
      <h2 className={style.title}>Comentários</h2>
      <ReactDisqusComments
        shortname="devzera"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </section>
  )
}

export default memo(Comments)
