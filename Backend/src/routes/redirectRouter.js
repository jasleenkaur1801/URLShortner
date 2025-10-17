import {Router} from "express";
import redirectHandler from "../controllers/redirectController.js";

const redirectRouter = new Router();
redirectRouter.get("/:code",redirectHandler);

export default redirectRouter;