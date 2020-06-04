import React, { memo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'
import Message from '../../components/Message'
import SEO from '../../components/Seo'

import TwitterIcon from '../../assets/images/twitter.svg'
import LinkedinIcon from '../../assets/images/linkedin.svg'

import style from './style.module.css'

const SocialMedias = () => (
  <div className={style.social_media}>
    <a
      href="https://www.linkedin.com/in/allangabrielrds/"
      rel="noreferrer"
      target="_blank"
    >
      <LinkedinIcon
        fill="#292C2B"
        width="1.5rem"
        height="1.5rem"
      />
    </a>
    <a
      href="https://twitter.com/allangrds"
      rel="noreferrer"
      target="_blank"
    >
      <TwitterIcon
        fill="#292C2B"
        width="1.5rem"
        height="1.5rem"
      />
    </a>
  </div>
)

const Messages = () => (
  <div className={style.wrapper}>
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
        content: 'Meu nome é Allan Ramos, sou nascido em Caraguatatuba/SP. Programador front-end e arranhador de back-end.',
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
  </div>
)

const AboutPage = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
      }
    `
  )

  return (
    <Layout>
      <SEO title="Sobre" />
      <div className={style.image_container}>
        <Img
          className={style.avatar}
          fluid={avatarImage.childImageSharp.fluid}
        />
      </div>
      <Messages />
    </Layout>
  )
}

export default memo(AboutPage)
