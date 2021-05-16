import { checkForURL } from '../js/URLChecker'

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkForURL).toBeDefined();
    })
})