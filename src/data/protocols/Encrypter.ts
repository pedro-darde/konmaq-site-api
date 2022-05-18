export interface Encrypter {
    encrypt: (id: string, userName: string, role?: string) => Promise<string>
}