import { status } from "elysia";
import type { UserModel } from "./model";

export abstract class User {
  static async getUsers() {
    return { message: 'Get all users' };
  }

  static async getUserById(id: string) {
    if (!id || typeof id !== 'string') {
      throw status(400, 'Invalid ID' satisfies UserModel['getUserByIdInvalid']);
    }
    return { message: `Get user with id ${id}` };
  }
}
