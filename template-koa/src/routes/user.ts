import Router from '@koa/router';
import userController from '../controller/userController';

const router = new Router();

router.get('/getUser', userController.getUser);

export default router;
