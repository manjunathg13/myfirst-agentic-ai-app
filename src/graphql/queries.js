/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAltPartRecommendation = /* GraphQL */ `
  query GetAltPartRecommendation($id: ID!) {
    getAltPartRecommendation(id: $id) {
      id
      MPN
      Description
      AltMPN1
      AltMPN2
      AltMPN3
      LifecycleStatus
      ROHS
      EOL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAltPartRecommendations = /* GraphQL */ `
  query ListAltPartRecommendations(
    $filter: ModelAltPartRecommendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAltPartRecommendations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        MPN
        Description
        AltMPN1
        AltMPN2
        AltMPN3
        LifecycleStatus
        ROHS
        EOL
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
