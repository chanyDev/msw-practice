import { rest } from 'msw';
import { graphql } from 'msw';

export interface FriendResponse {
  name: string;
  info: {
    birthday: string;
    mbti: string;
    blood: string;
  };
}

export const handlers = [
  rest.get<{ data: FriendResponse }>(
    'https://backend.dev/friends',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: '김동찬',
          info: {
            birthday: '10월 28일',
            mbti: 'ENTP',
            blood: 'B형',
          },
        })
      );
    }
  ),

  graphql.query('GetFriend', (req, res, ctx) => {
    const { mediaId } = req.variables;

    return res(
      ctx.data({
        Media: {
          id: mediaId,
          title: {
            english: 'One Piece',
          },
        },
      })
    );
  }),
];
