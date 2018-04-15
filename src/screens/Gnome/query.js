import gql from 'graphql-tag';

export const GET_GNOME_BY_ID = gql`
  query getGnomeById($id: ID!) {
    gnome(id: $id) {
      name
      thumbnail
      age
      weight
      height
      hair_color
      professions
      friends {
        id
        name
        thumbnail
        professions
      }
    }
  }
`;
