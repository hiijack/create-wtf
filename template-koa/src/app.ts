import Koa from 'koa';
import { bodyParser } from '@koa/bodyparser';
import router from './routes';
import errorHandler from './middleware/errorHandler';

const app = new Koa();
app.use(bodyParser());

app.use(router.routes());
app.use(errorHandler);

export default app;
