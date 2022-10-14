import { rest } from "msw";

export interface FriendResponse {
  name: string;
  info: {
    brithday: string;
    mbti: string;
    blood: string;
  };
}

export const handlers = [
  rest.get<{ data: FriendResponse }>(
    "https://backend.dev/friends",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: "김동찬",
          info: {
            brithday: "10월 28일",
            mbti: "ENTP",
            blood: "B형",
          },
        })
      );
    }
  ),
];
