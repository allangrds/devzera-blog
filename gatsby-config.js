require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  plugins: [
    {
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets/img`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        postCssPlugins: [
          require('postcss-preset-env')({ stage: 0 }),
          require('postcss-nested'),
        ],
      },
      resolve: 'gatsby-plugin-postcss',
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
      },
      resolve: 'gatsby-plugin-algolia-search',
    },
    {
      options: {
        background_color: '#16202c',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
        name: 'Devzera',
        short_name: 'Devzera',
        start_url: '/',
        theme_color: '#16202c',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      options: {
        rule: {
          include: /assets/,
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        plugins: [
          {
            options: {
              name: 'uploads',
            },
            resolve: 'gatsby-remark-relative-images',
          },
          {
            options: {
              linkImagesToOriginal: false,
              maxWidth: 984,
            },
            resolve: 'gatsby-remark-images',
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs',
        ],
      },
      resolve: 'gatsby-transformer-remark',
    },
  ],
  siteMetadata: {
    author: '@allangrds',
    description: 'Aprendendo e compartilhando tecnologia',
    siteUrl: 'https://blog.devzera.com.br',
    title: 'Devzera',
  },
}
