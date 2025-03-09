import register_commands from '~/modules/discord-bot/controller/registerCommands';
import handleControllerError from '~/server/utils/handleControllerError';

export default defineEventHandler(async (event) => {
    register_commands()
        .then(() => {
            setResponseStatus(event, 200);
        })
        .catch((error) => {
            handleControllerError(error)
        });
});