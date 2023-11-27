import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $status: String, $type: String, $gender: String, $name: String, $specie: String){
    characters(page: $page, filter: { status: $status, type: $type, gender: $gender, name: $name, species: $specie}) {
      info {
        count
        pages
      }
      results {
        id
        name
        species 
        image
        gender
        status
        type
        location {
          id
          name
        }
        episode {
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER = gql`
query GetDetailCharacter($id: ID!){
  character(id: $id) {
      id
      name
      species 
      image
      gender
      status
      type
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
      }
    }
}
`;

export const GET_LOCATIONS = gql`
  query GetLocations ($page: Int!, $name: String, $type: String, $dimension: String){
    locations(page: $page, filter: {name: $name, type: $type, dimension: $dimension }){
        info {
            count
            pages
        }
        results {
            id
            name
        }
    }
  }
`;