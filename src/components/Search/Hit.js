import React, { memo } from 'react'
import Post from '../Post'

const Hit = ({ hit }) => (
  <Post
    date={hit.date}
    description={hit.description}
    slug={hit.fields.slug}
    timeToRead={hit.timeToRead}
    title={hit.title}
  />
)

export default memo(Hit)
