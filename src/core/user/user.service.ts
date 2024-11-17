import { Container, Service } from 'typedi';


@Service()
export  class UserService{

    constructor(){}

    async  findAll() {
        return {
            data : "All Users"
        }
    }

}