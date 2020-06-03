const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our
    // `data/faqs` directory into `/faqs/slug`
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
