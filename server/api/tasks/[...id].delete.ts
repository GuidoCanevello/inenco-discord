import tasks_delete from "~/server/controllers/tasks/tasks_delete";
import handleControllerError from "~/server/utils/handleControllerError";

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id;

    try {
        const response = await tasks_delete(id)
        return response;
    } catch (error) {
        handleControllerError(error)
    }
})