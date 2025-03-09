import users_get from "~/server/controllers/users/users_get";
import handleControllerError from "~/server/utils/handleControllerError";

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id;

    try {
        const response = await users_get(id)
        return response
    } catch (error) {
        handleControllerError(error)
    }
})