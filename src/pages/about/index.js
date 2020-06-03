import React, { memo } from 'react'

import Layout from '../../components/Layout'
import Message from '../../components/Message'

import FaceboookIcon from '../../assets/images/facebook.svg'
import InstagramIcon from '../../assets/images/instagram.svg'
import TwitterIcon from '../../assets/images/twitter.svg'

import style from './style.module.css'

const SocialMedias = () => (
  <div className={style.social_media}>
    <a href="/" target="_blank">
      <FaceboookIcon
        fill="#292C2B"
        width="1.5rem"
        height="1.5rem"
      />
    </a>
    <a href="/" target="_blank">
      <TwitterIcon
        fill="#292C2B"
        width="1.5rem"
        height="1.5rem"
      />
    </a>
    <a href="/" target="_blank">
      <InstagramIcon
        fill="#292C2B"
        width="1.5rem"
        height="1.5rem"
      />
    </a>
  </div>
)

const AboutPage = () => (
  <Layout>
    <Message
      type="receive"
      message={{
        content: 'Quem é você?',
        type: 'string',
      }}
    />
    <Message
      type="send"
      message={{
        content: 'Meu nome é Allan Ramos, nascido em Caraguatatuba/SP.Sou programador front-end.',
        type: 'string',
      }}
    />
    <Message
      type="receive"
      message={{
        content: 'Qual o objetivo do blog?',
        type: 'string',
      }}
    />
    <Message
      type="send"
      message={{
        content: 'Compartilhar os paranauê que eu aprender.',
        type: 'string',
      }}
    />
    <Message
      type="receive"
      message={{
        content: 'Como posso te encontrar nas redes sociais?',
        type: 'string',
      }}
    />
    <Message
      type="send"
      message={{
        content: <SocialMedias />,
        type: 'node',
      }}
    />
  </Layout>
)

export default memo(AboutPage)
