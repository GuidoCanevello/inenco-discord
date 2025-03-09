import users_delete from "~/server/controllers/users/users_delete";
import handleControllerError from "~/server/utils/handleControllerError";

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id;

    try {
        const response = await users_delete(id)
        return response;
    } catch (error) {
        handleControllerError(error)
    }
})