import gql from 'graphql-tag';

export const GET_GNOMES = gql`
  query GetGnomes {
    allGnomes {
      id
    }
  }
`;
