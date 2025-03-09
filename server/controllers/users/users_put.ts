import { User } from "~/server/models/User.model";

/**
 * Updates a User's data
 *
 * @param id The User's Id
 * @param data The User's data
 */
export default async function (id: TMongoID, data: IUser) {
    data._id = undefined;

    const query = await User.findOneAndUpdate({ _id: id }, data, { new: true }).exec()
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
            content: "User not found",
        };
    }

    return query;
};
