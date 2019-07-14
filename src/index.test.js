describe('conversor', () => {

    const conversor = require('./index.js');

    describe('nao converter quando', ()=>{

        it('nao houver parametro', () => {
            expect(()=> conversor()).toThrowError(new Error('Only one argument is allowed'))
        })
    
        it('nao converter quando houver mais de um parametro', () => {
            expect(()=> conversor('I', 'v')).toThrowError('Only one argument is allowed')
        })
    
        it('letras inexistentes', () => {
            expect(()=> conversor("J")).toThrowError('caracter invalido') 
        })
    })

    it('x vi', () => {
        expect(conversor('XVI')).toEqual(16)
    })
    
    it('converter I para 1', () => {
        expect(conversor("I")).toEqual(1);
    })

    it('converter II para 2', () => {
        expect(conversor("II")).toEqual(2);
    })

    it('converter III para 3', () => {
        expect(conversor("III")).toEqual(3);
    })

    it('converter XXX para 30', () => {
        expect(conversor("XXX")).toEqual(30);
    })

    it('converter CCC para 300', () => {
        expect(conversor("CCC")).toEqual(300);
    })

    it('converter MMM para 3000', () => {
        expect(conversor("MMM")).toEqual(3000);
    })

    it('converter IV para 4', () => {
        expect(conversor("IV")).toEqual(4);
    })

    it('converter M para 1000', () => {
        expect(conversor("M")).toEqual(1000)
    })

    it('converter MM para 2000', () => {
        expect(conversor("MM")).toEqual(2000)
    })

    it('converter VIII para 8', () => {
        expect(conversor("VIII")).toEqual(8)
    })

    it('converter LXII para 62', () => {
        expect(conversor("LXII")).toEqual(62)
    })

    it('converter CLVIII para 158', () => {
        expect(conversor("CLVIII")).toEqual(158)
    })

    it('converter MCXX para 1120', () => {
        expect(conversor("MCXX")).toEqual(1120)
    })

    it('converter IX para 9', () => {
        expect(conversor("IX")).toEqual(9)
    })

    
})