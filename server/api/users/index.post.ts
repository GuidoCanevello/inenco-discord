import bcrypt from 'bcrypt';
import users_create_post from "~/server/controllers/users/users_create_post";
import handleControllerError from "~/server/utils/handleControllerError";

export default defineEventHandler(async (event) => {
    const data = (await readBody(event) as IUser);

    // Validate the password
    if (data.password == undefined) {
        handleControllerError({
            number: 400,
            content: "Password is required",
        });
    } else {
        try {
            data.password = await bcrypt.hash(data.password, 10);

            let response = await users_create_post(data);
            setResponseStatus(event, 201);
            return response;
        } catch (error) {
            handleControllerError(error)
        }
    }
})