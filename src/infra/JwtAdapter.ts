import jwt, { Secret } from 'jsonwebtoken'
import { Decrypter } from '../data/protocols/Decrypter'
import { Encrypter } from '../data/protocols/Encrypter'
export class JwtAdapter implements Encrypter, Decrypter {
    private readonly secret: Secret
    constructor(secret: Secret) {
        this.secret = secret
    }

    async encrypt(value: string, userName: string, role?: string): Promise<string> {
        const token = jwt.sign({ id: value, role, userName }, this.secret, { expiresIn: "1 day" })
        return token
    }

    async decrypt(token: string): Promise<string> {
        const value: any = await jwt.verify(token, this.secret)
        return value
    }
}