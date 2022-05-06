import { randomUUID } from "crypto";
import { DbUser } from "../../../data/usecase/DbUser";
import { JwtAdapter } from "../../../infra/JwtAdapter";
import { ResetTokenMiddleware } from "../../../presentation/middlewares/ResetTokenMiddleware";
import { adaptResetToken } from "../../adapters/reset-token-adapter";

export const makeResetToken = adaptResetToken(new ResetTokenMiddleware(new DbUser(), new JwtAdapter(randomUUID())))
