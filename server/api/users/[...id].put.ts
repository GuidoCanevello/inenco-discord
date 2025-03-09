import users_put from "~/server/controllers/users/users_put";
import handleControllerError from "~/server/utils/handleControllerError";

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id;
    const data = await readBody(event) as IUser;

    try {
        const response = await users_put(id, data)
        return response
    } catch (error) {
        handleControllerError(error)
    }
})