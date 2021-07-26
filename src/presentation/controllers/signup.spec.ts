import { SignUpController } from './signup'
import { MissingParamError } from '../error/missing-param-error'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'Denis',
        email: 'leandro@leandro.com.br',
        password: 'l@lcombr',
        passwordConfirmation: 'l@lcombr'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
})
test('Should return 400 if no email is provided', () => {
  const sut = new SignUpController()
  const httpRequest = {
    body: {
      name: 'Denis',
      // email: 'leandro@leandro.com.br',
      password: 'l@lcombr',
      passwordConfirmation: 'l@lcombr'
    }
  }
  const httpResponse = sut.handle(httpRequest)
  expect(httpResponse.statusCode).toBe(400)
  expect(httpResponse.body).toEqual(new MissingParamError('email'))
})
