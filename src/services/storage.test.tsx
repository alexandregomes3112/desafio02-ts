import { createLocalStorage, getAllLocalStorage } from "./storage";

describe('storage', () => {
    
    it('should return diobank key on localStorage', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Should create object on loclal storage', () => {
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify({ login: false }))
    })
})