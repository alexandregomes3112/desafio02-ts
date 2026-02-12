const conta = {
    email: 'john@provider.com', 
    password: 'password123', 
    Name: 'John Smith', 
    balance: 1234567.89, 
    id: 1, 
    SSN: '123-45-6789', 
    address: '123 Main St, Anytown, USA',
    phone: '(555) 123-4567',
    accountType: 'Checking',
    openedDate: '2020-01-01',
    lastLogin: '2024-06-01T12:00:00Z'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500)
})