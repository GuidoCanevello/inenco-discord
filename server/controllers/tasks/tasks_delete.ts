import { Task } from "~/server/models/Task.model";

/**
 * Deletes a Task
 *
 * @param id The Task's Id
 */
export default async function (id: TMongoID) {
    const answer = await Task.deleteOne({ _id: id }).exec()
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

    if (answer.deletedCount === 0) {
        throw {
            number: 404,
            content: "Task not found",
        };
    }

    return answer;
};
