import { attachControllers } from "@decorators/express";
import { Router } from "express";
import { UserController } from "../core/user/user.controller";


const router = Router()


attachControllers(router, [UserController])

export default router 