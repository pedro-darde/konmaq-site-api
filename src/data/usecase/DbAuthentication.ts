import { Authentication } from "../../domain/authentication";
import { DbUserAccount } from "../../domain/db-account";

export class DbAuthentication implements Authentication {
    private readonly hashCompare: HashCompare
    private readonly encrypter: Encrypter
    private readonly dbUser: DbUserAccount
}