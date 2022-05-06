import { adaptMiddleware } from "../../adapters/middleware-adapter";
import { makeAuthMiddleware } from "../../middlewares/auth";

export const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))