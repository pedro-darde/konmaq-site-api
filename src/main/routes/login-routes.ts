import { Router } from "express";
import { LoginController } from "../../controllers/Login/LoginController";
import { DbAuthentication } from "../../data/usecase/DbAuthentication";
import { DbUser } from "../../data/usecase/DbUser";
import { JwtAdapter } from "../../infra/JwtAdapter";
import { randomUUID } from 'crypto'
import { adaptRoute } from "../adapters/router-adapter";

const makeLoginController = () => {
    const dbUser = new DbUser()
    const encrypter = new JwtAdapter(randomUUID())
    const dbAutheticantion = new DbAuthentication(dbUser, encrypter)
    const loginController = new LoginController(dbAutheticantion)
    return loginController
}

export default (route: Router) => {
    route.post('/login', adaptRoute(makeLoginController()))
}