const conta = {
    email: 'john@provider.com', 
    password: 'password123', 
    Name: 'John Smith', 
    balance: 1000987.50, 
    id: 1
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500)
})