module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ryancross.dev",
    title: "Ryan Cross",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_ACCESS_TOKEN,
        graphQLQuery: `
        {
          search(type: REPOSITORY, query: "user:$userName topic:$topicName", last: 50) {
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
          user(login: $userName) {
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
          userName: "RyanCross",
          topicName: "game-jam"
        }
      }
    }
  ]
};
