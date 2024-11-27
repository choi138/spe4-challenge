import { gql } from '@apollo/client';

export const getLocationsQueryDocument = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
