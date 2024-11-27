import {gql} from '@apollo/client';

export const getLocations = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
