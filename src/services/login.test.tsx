import { login } from "./login"

describe('login', () => {

    const mockEmail = 'john@provider.com'
    const mockPassword = 'password123'
    
    it('Should be present a welcome alert', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })


    it('Should show an error case invalid e-mail', async() => {
        const response = await login('invalid@invalid.com', mockPassword)
        expect(response).toBeFalsy()
    })

    it('Should show an error case invalid password', async() => {
        const response = await login(mockEmail, 'invalid_password')
        expect(response).toBeFalsy()
    })
})