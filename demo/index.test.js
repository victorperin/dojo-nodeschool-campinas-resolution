// para resetar o wallaby.js, por causa da licensa (nois é pobre hehe),
// é necessário rodar: ctrl+shift+R, R

// jest documentation: https://jestjs.io/docs/en/expect

describe('example tests', () => {

    const execution = require('./index')

    it('should run', () => {
        expect(1).toBe(1)
    })

    it('should not run', () => {
        expect(1).toBe(2)
    })

    it('should throw error', () => {
        throw new Error('teste')
    })

    it('should run for 145 miliseconds', (callback) => {
        setTimeout(callback, 145)
    })

    it('should test sum on execution', () => {
        const values = [
            {first: 1, second: 2, expectedResult: 3},
            {first: 2, second: 2, expectedResult: 4},
            {first: 1, second: 4, expectedResult: 5},
            {first: 10, second: 2, expectedResult: 12},
            {first: 13, second: 43, expectedResult: 56},
            {first: 13, second: 43, expectedResult: 57},
        ];

        values.forEach( ({first, second, expectedResult}) => {
            const result = execution(first, second);
            expect(result).toBe(expectedResult)
        })
    })

})