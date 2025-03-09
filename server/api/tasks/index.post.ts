import tasks_create_post from "~/server/controllers/tasks/tasks_create_post";
import handleControllerError from "~/server/utils/handleControllerError";

export default defineEventHandler(async (event) => {
    const data = (await readBody(event) as ITask);

    try {
        let response = await tasks_create_post(data);
        setResponseStatus(event, 201);
        return response;
    } catch (error) {
        handleControllerError(error)
    }
})