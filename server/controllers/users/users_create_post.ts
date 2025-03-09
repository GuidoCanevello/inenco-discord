import { User } from "~/server/models/User.model";
import { Types } from 'mongoose';

/**
 * Creates a new User
 *
 * @param data The User's data
 */
export default async function (data: IUser) {
    data._id = new Types.ObjectId();

    const newUser = await User.create(data)
        .catch((error) => {
            return {
                content: error,
            };
        });
    return newUser;
};
