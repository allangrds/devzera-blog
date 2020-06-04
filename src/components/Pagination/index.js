import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from './style.module.css'

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <div className={style.wrapper}>
    {
      !isFirst
      && (
        <Link
          className={style.link}
          to={prevPage}
        >
          Anterior
        </Link>
      )
    }
    <span className={style.page_info}>
      { currentPage } de { numPages }
    </span>
    {
      !isLast
      && (
        <Link
          className={style.link}
          to={nextPage}
        >
          Próximo
        </Link>
      )
    }
  </div>
)

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  nextPage: PropTypes.string.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string.isRequired,
}

export default memo(Pagination)
