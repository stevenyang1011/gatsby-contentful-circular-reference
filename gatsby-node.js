const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      pages: allContentfulPage {
        edges {
          node {
            url
          }
        }
      }
    }
  `)

  data.pages.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.url}`,
      component: path.resolve("src/templates/page-template.js"),
      context: {
        url: node.url,
      },
    })
  })
}
