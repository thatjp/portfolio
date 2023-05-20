/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
      allWpPage {
        nodes {
          id
          slug
          uri
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPost } = result.data
  const { allWpPage } = result.data

  // Define the template to use
  const PostTemplate = require.resolve(`./src/templates/WpPost.js`)
  const PageTemplate = require.resolve(`./src/templates/WpPage.js`)

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: post.uri,
        component: PostTemplate,
        context: post,
      })
    })
  }

  if (allWpPage.nodes.length) {
    allWpPage.nodes.map(page => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: page.uri,
        component: PageTemplate,
        context: page,
      })
    })
  }
}
