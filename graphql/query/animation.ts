import { gql } from '@apollo/client';

export const GET_ANIMATION = gql`
  query Media($mediaId: Int) {
    Media(id: $mediaId) {
      id
      title {
        english
      }
    }
  }
`;
