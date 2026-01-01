import express from "express";
import { insertUser } from "../dal/mongodal.js";
import { getDB } from "../db/mongodb.js";
import { supabase } from "../db/supabase.js";
import { messageEncryption, insertMessage } from "../dal/supabasedal.js";

export const Router = express.Router();


Router.post("/auth/register", async (req, res)=>{
    if(!req.body.username || !typeof req.body.password === "string")
        res.status(400).json({error: error.message});
    else{
        const user = await insertUser(req.body)
        console.log("User created successfully");
        res.status(201).json({id: user.insertedId, username : req.body.username})
    }
    }   
)

// middlewares
Router.use("/", async (req, res, next)=>{
    const username = req.body.username
    const password = req.body.password
    const checkUser = await getDB().collection('users').findOne({username, password})
    if(!checkUser){
        res.status(404).send("The username or password is incorrect!")}
    else{
        next()
    }
    
})


Router.post("/messages/encrypt",  async (req, res)=>{
    if(!req.body.message || !req.body.cipherType)
        res.status(400).send("One of the details you entered is incorrect!");
    else{
        const message_encryption = messageEncryption(req.body.message) 
        const message = await insertAndChangeMessage(req.body)
        res.status(201).send("The message was saved successfully.")
    }
    }   
)
 










