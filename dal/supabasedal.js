import { supabase } from "../db/supabase.js";
import { join } from "node:path";


export async function messageEncryption(message){
    const newMessage = message.toUpperCase().split("").reverse().join("");
    return newMessage}




export async function insertMessage(obj, message) {
    const insertMessage = await supabase
    .from('message')
    .insert([{username: messageObj.username, cipherType: messageObj.cipherType, encrypted_text: newMessage}])
}