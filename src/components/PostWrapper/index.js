import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Post from '../Post'

import style from './style.module.css'

const PostWrapper = ({ posts }) => (
  <div className={style.wrapper}>
    {posts.map(
      ({
        node: {
          fields: {
            slug,
          },
          frontmatter: {
            date,
            description,
            title,
          },
          timeToRead,
        },
      }) => (
        <Post
          date={date}
          description={description}
          slug={slug}
          timeToRead={timeToRead}
          title={title}
        />
      ),
    )}
  </div>
)

PostWrapper.propTypes = {
  posts: PropTypes.node.isRequired,
}

export default memo(PostWrapper)
