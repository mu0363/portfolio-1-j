import { gql } from "graphql-request";

export const GET_REPOSITORIES = gql`
  query getRepositories {
    user(login: "mu0363") {
      pinnedItems(first: 10, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            stargazerCount
            forkCount
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              totalCount
              edges {
                size
                node {
                  id
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`;
