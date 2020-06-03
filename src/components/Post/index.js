import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from './style.module.css'

const Post = ({
  slug,
  date,
  timeToRead,
  title,
  description,
}) => (
  <Link
    className={style.link}
    to={slug}
  >
    <section className={style.wrapper}>
      <time className={style.time}>
        { date } - { timeToRead } minuto(s) de leitura
      </time>
      <h1 className={style.title}>
        { title }
      </h1>
      <h2 className={style.description}>
        { description }
      </h2>
    </section>
  </Link>
)

Post.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default memo(Post)
