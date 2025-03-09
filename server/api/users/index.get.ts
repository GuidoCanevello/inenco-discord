import users_get_by_discordUsername from "~/server/controllers/users/users_get_by_discordUsername";
import users_list from "~/server/controllers/users/users_list";
import handleControllerError from "~/server/utils/handleControllerError";

export default defineEventHandler(async (event) => {
    const discordUsername = getQuery(event).discordUsername ? String(getQuery(event).discordUsername).trim() || undefined : undefined;

    try {
        var response;
        if (discordUsername){
            response = await users_get_by_discordUsername(discordUsername);
        }else {
            response = await users_list();
        }
        return response
    } catch (error) {
        handleControllerError(error)
    }
})