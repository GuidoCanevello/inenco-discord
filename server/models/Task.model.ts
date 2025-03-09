import { defineMongooseModel } from '#nuxt/mongoose';
import { Types } from 'mongoose';

export const Task = defineMongooseModel({
    name: 'Task',
    schema: {
        userId: {
            type: Types.ObjectId,
            ref: 'User',
            required: true
        },
        isCompleted: {
            // NOTE type is set like this to avoid an error when using "type: Boolean,"
            type: Boolean as unknown as () => boolean,
            default: false
        },
        description: {
            type: String,
            required: true,
            trim: true,
        }
    },
    options: {
        timestamps: true
    },
})