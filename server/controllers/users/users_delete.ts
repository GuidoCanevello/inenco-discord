import { User } from "~/server/models/User.model";

/**
 * Deletes a User
 *
 * @param id The User's Id
 */
export default async function (id: TMongoID) {
    await Task.deleteMany({ userId: id }).exec()
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

    const answer = await User.deleteOne({ _id: id }).exec()
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
            content: "User not found",
        };
    }

    return answer;
};
