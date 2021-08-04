import { SignUpController } from './signup'
import { MissingParamError } from '../error/missing-param-error'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = makeSut()
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

  test('Should return 400 if no email is provided', () => {
    const sut = makeSut()
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

  test('Should return 400 if no password is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'Denis',
        email: 'leandro@leandro.com.br',
        // password: 'l@lcombr',
        passwordConfirmation: 'l@lcombr'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no password confirmation is provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'Denis',
        email: 'leandro@leandro.com.br',
        password: 'l@lcombr'
        // passwordConfirmation: 'l@lcombr'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })

  test('Should return 400 if an invalid email provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'Denis',
        email: 'invalid@email.com',
        password: 'l@lcombr',
        passwordConfirmation: 'l@lcombr'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })


})
