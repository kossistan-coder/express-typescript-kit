
import 'reflect-metadata';
import express, { Express, Request, Response, Application, NextFunction } from "express";
import path from 'path'
import router from './routes/web.routes';
import { engine } from 'express-handlebars';




let app : Application = express()

const port = 9000

    app.engine('handlebars', engine()); 
    app.set('view engine', 'handlebars');
    app.set('views', `${__dirname}/views`);

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
    app.use('/static',express.static(path.join(__dirname, '../public')))



app.use(router)


app.listen(port, () => {
    console.log("Server launch ... ",`${__dirname}/views/home`);
    
})
