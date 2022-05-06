import { Authentication, AuthenticationModel } from "../../domain/authentication";
import { DbUserAccount } from "../../domain/db-account";
import bcrypt from 'bcrypt'
import { Encrypter } from "../protocols/Encrypter";
export class DbAuthentication implements Authentication {
    private readonly dbUser: DbUserAccount
    private readonly encrypter: Encrypter

    constructor(dbUser: DbUserAccount, encrypter: Encrypter) {
        this.dbUser = dbUser
        this.encrypter = encrypter
    }
    async auth({ email, password }: AuthenticationModel): Promise<string> {
        const account = await this.dbUser.findByEmail(email)
        if (account && account.id) {
            const isValid = await bcrypt.compare(password, account.password)
            if (isValid) {
                const accessToken = await this.encrypter.encrypt(account.id?.toString()!)
                await this.dbUser.updateAccessToken(account.id, accessToken)
                return accessToken
            }
        }
        return null
    };
}