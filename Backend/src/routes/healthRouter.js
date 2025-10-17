import { Router } from "express";

const healthRouter = new Router();

healthRouter.get("/",(req, res)=>{
    res.status(200).json({message:"All OK!"});
});

export default healthRouter