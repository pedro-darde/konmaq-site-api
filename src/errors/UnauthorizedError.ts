export class UnauthorizedError extends Error {
    constructor() {
        super('Unauthorized')
        this.name = 'Usuário não encontrado'
    }
}
