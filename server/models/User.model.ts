import { defineMongooseModel } from '#nuxt/mongoose';

export const User = defineMongooseModel({
    name: 'User',
    schema: {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        discordUsername: {
            type: String,
            required: true,
            trim: true,
        }
    },
    options: {
        timestamps: true
    },
})