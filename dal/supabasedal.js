import { supabase } from "../db/supabase.js";
import { join } from "node:path";


export async function insertAndChangeMessage(message, cipherType){
    const newMessage = message.toUpperCase()
    const listOfMessage= newMessage.split("")
    const data1 = listOfMessage.reverse()
    const data2 = data1.join("")
    const insertMessage = await supabase
        .from('message')
        .insert([{ data2, cipherType }]); 
}