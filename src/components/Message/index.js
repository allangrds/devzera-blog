import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './style.module.css'

const Message = ({ message, type }) => {
  const boxClassName = classNames(
    style.box,
    style[type],
  )
  const messageClassName = classNames(
    style.message,
    style[type],
  )
  const renderString = () => (
    <p className={messageClassName}> { message.content }</p>
  )
  const renderNode = () => (
    <div className={messageClassName}> { message.content }</div>
  )

  return (
    <div className={boxClassName}>
      {
        message.type === 'node'
          ? renderNode()
          : renderString()
      }
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]).isRequired,
    type: PropTypes.oneOf(['string', 'node']).isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['receive, sent']).isRequired,
}

export default memo(Message)
