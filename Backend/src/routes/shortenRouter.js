import { Router } from "express";
import shortenHandler from "../controllers/shortenController.js";

const shortenRouter = new Router();
shortenRouter.post("/",shortenHandler);

export default shortenRouter;