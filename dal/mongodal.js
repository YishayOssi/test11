import { getDB } from "../db/mongodb.js";


export async function insertUser(user) {
    const newUser = {   
        username: user.username,    
        password: user.password, 
        encryptedMessagesCount: 0, 
        createdAt: new Date(),                                
    };
    return await getDB().collection('users').insertOne(newUser);
}


