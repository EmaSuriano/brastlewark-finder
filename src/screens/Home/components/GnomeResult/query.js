import gql from 'graphql-tag';

export const GET_GNOMES = gql`
  query GetGnomes($name: String, $professions: [String]) {
    allGnomes(name: $name, professions: $professions) {
      id
      name
      thumbnail
      professions
    }
  }
`;

export default {
  GET_GNOMES,
};
