import { MissingParamError } from '../error/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { httpResponse, httpRequest } from '../protocols/http'
export class SignUpController {
  handle (httpRequest: httpRequest): httpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
