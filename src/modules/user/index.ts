import { Elysia } from "elysia";
import { User } from "./service";
import { UserModel } from "./model";

const user = new Elysia({ prefix: '/user' });

user.get('/', async () => {
    return await User.getUsers();
}, {
    response: {
      200: UserModel.getUsersResponse
    },
});

user.get('/:id', async ({ params }) => {
    return await User.getUserById(params.id);
}, {
    params: UserModel.getUserByIdParams,
    response: {
      200: UserModel.getUserByIdResponse,
      400: UserModel.getUserByIdInvalid
    },
});

export { user };
