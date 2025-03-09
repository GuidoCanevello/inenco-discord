import tasks_list from "~/server/controllers/tasks/tasks_list";
import handleControllerError from "~/server/utils/handleControllerError";

export default defineEventHandler(async (event) => {
    const userId = getQuery(event).userId ? String(getQuery(event).userId).trim() || undefined : undefined;

    const dateFrom = getQuery(event).dateFrom ? new Date(String(getQuery(event).dateFrom)) : undefined;
    if (dateFrom && isNaN(dateFrom.getTime())) {
        handleControllerError({
            number: 400,
            content: "Invalid date provided in 'dateFrom' query parameter"
        })

        return;
    }

    const dateTo = getQuery(event).dateTo ? new Date(String(getQuery(event).dateTo)) : undefined;
    if (dateTo && isNaN(dateTo.getTime())) {
        handleControllerError({
            number: 400,
            content: "Invalid date provided in 'dateTo' query parameter"
        })

        return;
    }

    var isCompleted: boolean | undefined;
    if (getQuery(event).isCompleted !== undefined) {
        if (getQuery(event).isCompleted == "true" || getQuery(event).isCompleted == "false") {
            isCompleted = getQuery(event).isCompleted ? getQuery(event).isCompleted === "true" : false;
        }else {
            handleControllerError({
                number: 400,
                content: "Invalid value provided in 'isCompleted' query parameter"
            })

            return;
        }
    }

    try {
        const response = await tasks_list({
            userId,
            dateFrom,
            dateTo,
            isCompleted
        });
        return response
    } catch (error) {
        handleControllerError(error)
    }
})