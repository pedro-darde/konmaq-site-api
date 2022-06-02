import { DbLoadAccountByToken } from "../../data/usecase/DbLoadAccountByToken";
import { DbUser } from "../../data/usecase/DbUser";
import { JwtAdapter } from "../../infra/JwtAdapter";
import { AuthMiddleware } from "../../presentation/middlewares/AuthMiddleware";
import { Middleware } from "../../protocols/Middleware";

export const makeAuthMiddleware = (role?: string): Middleware => {
    const dbUser = new DbUser()
    const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET || 'RANDOM_KEY_HERE')
    const loadAccountByToken = new DbLoadAccountByToken(jwtAdapter, dbUser)
    return new AuthMiddleware(loadAccountByToken, jwtAdapter, jwtAdapter, dbUser, role)
}