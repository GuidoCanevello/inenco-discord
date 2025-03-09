import { User } from "../../models/User.model";

/**
 * Gets a User by its Id
 *
 * @param discordUsername The User's Discord Username
 */
export default async function (discordUsername: string) {
    const query = await User.findOne({ discordUsername }).exec()
        .catch((error) => {
            if (error.name === "CastError") {
                throw {
                    number: 400,
                    content: "Incorrect Discord Username",
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
