import { Controller, Get, Post, Response , Request } from "@decorators/express";
import {Request as HttpRequest , Response as HttpResponse} from "express"
import { UserService } from "./user.service";
import { Service , Inject , Container } from "typedi";

@Controller("/")

export  class UserController   {

    constructor(
    private   userService:  UserService 
    ) {
        this.userService = Container.get(UserService)
    }

    @Get("/users")
    async index(@Request() req : HttpRequest , @Response() res : HttpResponse) {
        try {
            const response = await this.userService.findAll();

            console.log(response)
         
            return res.render("home");
        } catch (error) {
            console.log("=====JOLIE CATCH ====== ",error)
            return res.status(500).send("An error occurred while rendering the view");
        }
    }

    @Get('/all')
    async getUsers(@Request() req : HttpRequest , @Response() res : HttpResponse) {
        try {
             const response = await this.userService.findAll();
            return res.send(response)
        } catch (error) {
            console.log(error)
        }
    }
}
