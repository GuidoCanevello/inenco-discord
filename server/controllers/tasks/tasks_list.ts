import { Task } from "~/server/models/Task.model";
import users_get from "../users/users_get";

/**
 * Gets all Tasks, can be filtered by User, Dates (from and to), and if they are completed or not
 *
 */
export default async function (options: {
    userId?: TMongoID,
    dateFrom?: Date,
    dateTo?: Date,
    isCompleted?: boolean,
}) {
    // NOTE try to get the User, if there is an error with its id, it will throw an error
    if (options.userId) await users_get(options.userId);

    const query = await Task.find({
        ...(options.userId && { userId: options.userId }),
        ...(options.dateFrom && { createdAt: { $gte: options.dateFrom } }),
        ...(options.dateTo && { createdAt: { $lte: options.dateTo } }),
        ...(options.isCompleted !== undefined && { isCompleted: options.isCompleted }),
    }).exec();

    return query;
};
