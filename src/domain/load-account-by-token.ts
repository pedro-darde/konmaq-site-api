import { User } from "../models/User";

export interface LoadAccountByToken {
    load: (accessToken: string, role?: string) => Promise<User | null>
}
