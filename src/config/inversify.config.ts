import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { UserService } from '../core/user/user.service';
import { TYPES } from './types';



// set up container
let container = new Container();

// set up bindings

container.bind<UserService>(TYPES.UserService).to(UserService);

export default container