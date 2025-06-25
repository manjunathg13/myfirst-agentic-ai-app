/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAltPartRecommendation = /* GraphQL */ `
  mutation CreateAltPartRecommendation(
    $input: CreateAltPartRecommendationInput!
    $condition: ModelAltPartRecommendationConditionInput
  ) {
    createAltPartRecommendation(input: $input, condition: $condition) {
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
export const updateAltPartRecommendation = /* GraphQL */ `
  mutation UpdateAltPartRecommendation(
    $input: UpdateAltPartRecommendationInput!
    $condition: ModelAltPartRecommendationConditionInput
  ) {
    updateAltPartRecommendation(input: $input, condition: $condition) {
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
export const deleteAltPartRecommendation = /* GraphQL */ `
  mutation DeleteAltPartRecommendation(
    $input: DeleteAltPartRecommendationInput!
    $condition: ModelAltPartRecommendationConditionInput
  ) {
    deleteAltPartRecommendation(input: $input, condition: $condition) {
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
