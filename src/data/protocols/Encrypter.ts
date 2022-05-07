export interface Encrypter {
    encrypt: (id: string, role?: string) => Promise<string>
}