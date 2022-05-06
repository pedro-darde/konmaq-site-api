export class UnauthorizedError extends Error {
    constructor() {
        super('Unauthorized')
        this.name = 'Usuario nao encontrado'
    }
}
