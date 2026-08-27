import { t, type UnwrapSchema } from 'elysia';

export const UserModel = {
  getUsersResponse: t.Object({
    message: t.String(),
  }),
  getUserByIdResponse: t.Object({
    message: t.String(),
  }),
  getUserByIdParams: t.Object({
    id: t.String(),
  }),
  getUserByIdInvalid: t.Literal('Invalid ID'),
}as const;

export type UserModel = {
  [k in keyof typeof UserModel]: UnwrapSchema<typeof UserModel[k]>
}
