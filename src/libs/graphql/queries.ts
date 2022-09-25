import { gql } from "graphql-request";

export const GET_REPOSITORIES = gql`
  query getRepositories {
    user(login: "mu0363") {
      repositories(
        isFork: false
        privacy: PUBLIC
        ownerAffiliations: [OWNER]
        last: 5
        orderBy: { field: NAME, direction: ASC }
      ) {
        nodes {
          id
          name
          owner {
            login
          }
          description
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          languages(first: 100, orderBy: { field: SIZE, direction: DESC }) {
            totalCount
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;
