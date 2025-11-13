import Router from '@koa/router';
import userRoutes from './user';

const router = new Router();

router.use('/user', userRoutes.routes(), userRoutes.allowedMethods());

export default router;
