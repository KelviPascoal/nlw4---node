import { Router } from "express";
import { aswersRouter } from "./answers.routes";
import { npsRouter } from "./nps.routes";
import { sendEmailRouter } from "./sendEmail.routes";
import { surveysRouter } from "./surveys.routes";
import { userRouter } from "./User.routes";

export const routes = Router();

routes.use('/users', userRouter)
routes.use('/surveys', surveysRouter)
routes.use('/send-email', sendEmailRouter)
routes.use('/answers', aswersRouter)

routes.use('/nps', npsRouter)