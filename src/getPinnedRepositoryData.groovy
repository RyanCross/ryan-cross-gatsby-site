{
  user(login: "RyanCross") {
    pinnedItems(first: 10) {
      nodes {
        ... on Repository {
          name
          description
          createdAt
          languages(first: 1) {
            nodes {
              id
              color
              name
            }
          }
          forkCount
        }
      }
    }
  }
}
/*
 set social image preview of repository to animated gif 
 pull in openImageUrl in query for game-jams
 how to get just game jam rpeos
 **/

