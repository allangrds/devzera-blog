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
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        theme_color: '#663399',
      },
      resolve: 'gatsby-plugin-manifest',
    },
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
    title: 'Devzera',
  },
}
