import { User } from "../../models/User.model";

/**
 * Gets a User by its Id
 *
 * @param id The User's Id
 */
export default async function (id: TMongoID) {
    const query = await User.findById(id).exec()
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
