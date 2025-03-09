import { User } from "~/server/models/User.model";

/**
 * Gets all Users
 */
export default async function () {
    const query = await User.find({})
        .exec()
        .catch((error) => {
            throw {
                number: 500,
                content: error,
            };
        });

    return query;
};
