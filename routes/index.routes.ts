import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import userRoutes from './user/user.routes.ts';

const router = new Router({ prefix: '/api' });

router.use(userRoutes.routes());

export default router;