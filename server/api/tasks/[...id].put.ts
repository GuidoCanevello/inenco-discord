import tasks_put from "~/server/controllers/tasks/tasks_put";
import handleControllerError from "~/server/utils/handleControllerError";

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id;
    const data = await readBody(event) as ITask;

    try {
        const response = await tasks_put(id, data)
        return response
    } catch (error) {
        handleControllerError(error)
    }
})