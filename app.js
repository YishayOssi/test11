import express from "express"
import { config } from "dotenv"
import { Router } from "./routers/router.js"
import { connect } from "./db/mongodb.js"
import { supabase } from "./db/supabase.js"



config()

await connect()


const app  = express()
app.use(express.json())


// create Middleware general
app.use("/", (req, res, next) => {
   console.log(req.method, req.path)
   next()
})


app.use("/api", Router)



app.listen(process.env.PORT,()=> {
    console.log(`app listen on http://localhost:${process.env.PORT}`);
})





