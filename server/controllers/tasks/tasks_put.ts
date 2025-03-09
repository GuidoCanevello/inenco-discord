import { Task } from "~/server/models/Task.model";

/**
 * Updates a Task's data
 *
 * @param id The Task's Id
 * @param data The Task's data
 */
export default async function (id: TMongoID, data: ITask) {
    data._id = undefined;

    const query = await Task.findOneAndUpdate({ _id: id }, data, { new: true }).exec()
        .catch((error) => {
            if (error.name === "CastError") {
                throw {
                    number: 400,
                    content: "Incorrect Id",
                };
            } else {
                throw {
                    content: error,
                };
            }
        });

    if (query === null) {
        throw {
            number: 404,
            content: "Task not found",
        };
    }

    return query;
};
