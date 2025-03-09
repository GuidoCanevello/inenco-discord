import { Task } from "~/server/models/Task.model";
import { Types } from 'mongoose';

/**
 * Creates a new Task
 *
 * @param data The Task's data
 */
export default async function (data: ITask) {
    data._id = new Types.ObjectId();

    const newTask = await Task.create(data)
        .catch((error) => {
            return {
                content: error,
            };
        });
    return newTask;
};
