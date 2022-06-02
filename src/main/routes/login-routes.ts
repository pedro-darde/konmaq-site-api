import { Router } from "express";
import { LoginController } from "../../controllers/Login/LoginController";
import { DbAuthentication } from "../../data/usecase/DbAuthentication";
import { DbUser } from "../../data/usecase/DbUser";
import { JwtAdapter } from "../../infra/JwtAdapter";
import { adaptRoute } from "../adapters/router-adapter";
import { UpdateAccessTokenController } from "../../controllers/Login/UpdateAccessToken";

const makeLoginController = () => {
    const dbUser = new DbUser()
    const encrypter = new JwtAdapter(process.env.JWT_SECRET || 'RANDOM_KEY_HERE')
    const dbAutheticantion = new DbAuthentication(dbUser, encrypter)
    const loginController = new LoginController(dbAutheticantion)
    return loginController
}


const makeUpdateAccessTokenController = () => {
    const dbUser = new DbUser()
    const encrypter = new JwtAdapter(process.env.JWT_SECRET || 'RANDOM_KEY_HERE')
    const updateAccessTokenController = new UpdateAccessTokenController(dbUser, encrypter)
    return updateAccessTokenController
}

export default (route: Router) => {
    route.post('/login', adaptRoute(makeLoginController()))
    route.post('/update-token', adaptRoute(makeUpdateAccessTokenController()))
}