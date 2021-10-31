module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ryancross.dev",
    title: "Ryan Cross",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_ACCESS_TOKEN,
        graphQLQuery: `
        {
          search(type: REPOSITORY, query: "user:RyanCross topic:game-jam", last: 50) {
            repos: edges {
              repo: node {
                ... on Repository {
                  url
                  openGraphImageUrl
                  name
                  description
                }
              }
            }
          }
          user(login: "RyanCross") {
            pinnedItems(first: 10) {
              nodes {
                ... on Repository {
                  id
                  name
                  description
                  watchers {
                    totalCount
                  }
                  languages(first: 2) {
                    nodes {
                      color
                      name
                    }
                  }
                }
              }
            }
          }
        }        
          `,
        variables: {
          userFirst: 3,
          searchFirst: 2,
          q: "author:ldd is:merged state:closed type:pr sort:comments",
          author: "ldd"
        }
      }
    }
  ]
};
