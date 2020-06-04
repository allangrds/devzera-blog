const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')

// To add the slug field to each post
exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      basePath: 'pages',
      getNode,
      node,
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      name: 'slug',
      node,
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead

          }
        }
      }
    }
  `).then((result) => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        component: path.resolve('./src/templates/BlogPost/index.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
        path: node.fields.slug,
      })
    })

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        component: path.resolve('./src/templates/BlogList/index.js'),
        context: {
          currentPage: index + 1,
          limit: postsPerPage,
          numPages,
          skip: index * postsPerPage,
        },
        path: index === 0 ? '/' : `/page/${index + 1}`,
      })
    })
  })
}
