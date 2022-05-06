import { adaptMiddleware } from "../../adapters/middleware-adapter";
import { makeAuthMiddleware } from "../../middlewares/auth";

export const userAuth = adaptMiddleware(makeAuthMiddleware('user'))