import { db } from "./db";

export const getUserByEmail = ( email : string ) => {
    try {
        const user = db.user.findUnique({
            where: { email }
        })
        return user
    } catch (error) {
        return null
    }
}

export const getUserById = ( id : string ) => {
    try {
        const user = db.user.findUnique({
            where: { id }
        })
        return user
    } catch (error) {
        return null
    }
}