/**
 * A Task to complete
 */
interface ITask{
    _id?: TMongoID
    userId: TMongoID
    isCompleted: boolean
    description: String
    createdAt: Date
    updatedAt: Date
}