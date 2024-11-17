import { Response, Request , Params, Controller, Get, attachControllers, Middleware } from '@decorators/express'
import { Response as HttpResponse , Request as HttpRequest } from 'express';
import {AdminService} from './admin.service';
import { Inject, Injectable } from '@decorators/di';


@Controller('/')
@Injectable()
export  class AdminController {

    constructor(
        private readonly  adminService: AdminService
    ) {
        this.adminService = adminService
    }

    @Get('/')
    async index(@Request() req: HttpRequest, @Response() res: HttpResponse) {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}