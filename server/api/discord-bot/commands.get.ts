import commandsList from '~/modules/discord-bot/controller/commandsList';

export default defineEventHandler(async (event) => {
    return commandsList;
});