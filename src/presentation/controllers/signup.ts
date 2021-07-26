import { MissingParamError } from '../error/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { httpResponse, httpRequest } from '../protocols/http'
import { Controller } from '../protocols/controller'
export class SignUpController implements Controller {
  handle (httpRequest: httpRequest): httpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
