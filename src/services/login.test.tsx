import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login('email@provider.com', 'password123')
        expect(mockAlert).toHaveBeenCalledWith('Email: email@provider.com, Password: password123')
    })
})