const postQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr => arr.map(({ node: { frontmatter, ...rest } }) => ({
  ...frontmatter,
  date_timestamp: parseInt(
    (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0),
    10,
  ),
  ...rest,
}))
const settings = { attributesToSnippet: ['excerpt:20'] }

const queries = [
  {
    indexName: 'Posts',
    query: postQuery,
    settings,
    transformer: ({ data }) => flatten(data.posts.edges),
  },
]

module.exports = queries