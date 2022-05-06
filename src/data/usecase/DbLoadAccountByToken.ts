import { LoadAccountByToken } from "../../domain/load-account-by-token"
import { User } from "../../models/User"
import { Decrypter } from "../protocols/Decrypter"
import { DbUser } from "./DbUser"

export class DbLoadAccountByToken implements LoadAccountByToken {
    private readonly decrypter: Decrypter
    private readonly dbUser: DbUser

    constructor(decrypter: Decrypter, dbUser: DbUser) {
        this.decrypter = decrypter
        this.dbUser = dbUser
    }

    async load(accessToken: string, role?: string): Promise<User | null> {
        const token = await this.decrypter.decrypt(accessToken)
        if (token) {
            const account = await this.dbUser.findByToken(accessToken, role)
            if (account) {
                return account
            }
        }
        return null
    }
}
