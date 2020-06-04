import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import Comments from '../../components/Comments'

import style from './style.module.css'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout whiteBackground>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <div className={style.wrapper}>
        <span>
          <time className={style.time}>
            { post.frontmatter.date } - { post.timeToRead } minuto(s) de leitura
          </time>
        </span>
        <h1 className={style.title}>
          { post.frontmatter.title }
        </h1>
        <h2 className={style.description}>
          { post.frontmatter.description }
        </h2>
        <section className={style.post}>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </section>
      </div>
      <Comments
        title={post.frontmatter.title}
        url={post.fields.slug}
      />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        title
      }
      timeToRead
      html
    }
  }
`

export default BlogPost
