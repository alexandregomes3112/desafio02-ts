import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const dioBank = {
    login: false
}

describe('storage', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    
    it('should return diobank key on localStorage', () => {
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Should create object on loclal storage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Should change login status in localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})