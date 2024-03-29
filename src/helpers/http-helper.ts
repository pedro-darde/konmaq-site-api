import { ValidationError } from "class-validator";
import { EntityNotFoundError } from "typeorm";
import { ServerError } from "../errors/ServerError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { HttpResponse } from "../protocols/http";

export const badRequest = (error: string[]): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const validationError = (errors: string[]): HttpResponse => ({
  statusCode: 422,
  body: errors,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 201,
  body: { message: "Informações inseridas com sucesso", data },
});

export const serverError = (e: Error): HttpResponse => {
  console.log(e)
  return {
    statusCode: 500,
    body: new ServerError(e.stack!),
  }
};

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const entityNotFound = (e: EntityNotFoundError): HttpResponse => ({
  statusCode: 403,
  body: ["O registro nao pode ser encontrado"],
});
