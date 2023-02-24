// deno-lint-ignore-file
import { Context, helpers } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { createUser, getUserById, getUsers } from '../models/daos/user/user.mem.dao.ts';
import { User, UserPayload } from "../models/interfaces/User.ts";

export const getUsersController = async(ctx: Context) => {
    const users = await getUsers();
    ctx.response.body = users;
}

export const getUserByIdController = async(ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true })
    try {
        const user: User = await getUserById(id);
        ctx.response.body = user;
    } catch(error) {
        ctx.response.status = 404;
        ctx.response.body = { error_details: error }
    }
}

export const createUserController = async(ctx: Context) => {
    const body: UserPayload = await ctx.request.body().value
    const newUser = await createUser(body);
    ctx.response.status = 201;
    ctx.response.body = newUser;
}