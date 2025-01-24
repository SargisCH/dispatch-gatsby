/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Empower Your Logistic Business with Dispatch Assist`,
    description:  "Dispatch Assist is a choice for owner-operators and trucking companies looking to enhance their operations! With a dedicated team of dispatchers and logistics specialists, we are focused to keep drivers on the road while maximizing profit margins. We are committed to studying market trends and booking top-paying loads to stay competitive. Plus, our emphasis on excellent communication ensures that clients receive the quality care that they deserve.",
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon-16x16.png`

      },
    },
  ],
}
