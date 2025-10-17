import express from "express";
import "dotenv/config"
import morgan from "morgan";
import connectionPool from "./src/config/db.js";
import healthRouter from "./src/routes/healthRouter.js";
import shortenRouter from "./src/routes/shortenRouter.js";
import cors from "cors";
import redirectRouter from "./src/routes/redirectRouter.js";

const app=express();
const PORT=process.env.PORT||3000;
//middleware
app.use(express.json());

//cors
app.use(cors({
    origin: process.env.FRONTEND_URL
}))
//logger
app.use(morgan("dev"));
//routing
app.use("/health",healthRouter);
app.use("/shorten",shortenRouter);
app.use("/",redirectRouter);
// app.get("/health",(req,res)=>{
//     res.status(200).json({message:"OK"});
// })

async function startServer(){
    try{
        const {rows} = await connectionPool.query("select now() as now");
        console.log(`DB started at ${rows[0].now}`);
        const result=await connectionPool.query("select now() as now");
        console.log(result);
        //start server
        app.listen(PORT,()=>{
            console.log(`server listening on ${PORT}`);
        })
    } catch(err){
        console.log(`server not connected ${err}`);
    }
}
startServer();

