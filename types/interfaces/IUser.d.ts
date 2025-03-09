interface IUser {
    _id?: TMongoID
    username: string
    password: string
    discordUsername: string
    createdAt?: Date
    updatedAt?: Date
}