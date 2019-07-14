// Sua tarefa é desenvolver um programa que converta números indo-arábicos para o
// formato romano e vice-versa. As regras para a formação dos números romanos são
// apresentadas a seguir.

const algarismos = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
}

const conversor = (valor, ...valores) => {
    if (valores.length != 0 || valor === undefined) {
        throw new Error('Only one argument is allowed')
    }

    const reversedRomanNumbers = valor.split('').reverse();
    let flagnumber = 1;
    return reversedRomanNumbers.reduce((accumulator, char) => {
        let tmp;

        const valueChar = algarismos[char]
        if (!valueChar) {
            throw new Error('caracter invalido')
        }

        if (flagnumber <= valueChar) {
            tmp = accumulator + valueChar
        } else {
            tmp = accumulator - valueChar
        }

        if (flagnumber < valueChar) {
            flagnumber = valueChar
        }
        return tmp;
    }, 0)
}

module.exports = conversor;
