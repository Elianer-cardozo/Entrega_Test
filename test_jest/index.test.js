const lib = require ('../index.js')

describe('concatenarString', () => {
    test('"a" com "b" resultado "ab"', ()=>{
        expect (lib.concatenarString('a', 'b')). toBe("ab")
    });

    test('"sol" com "dado" resultado "soldado"', ()=>{
        expect (lib.concatenarString('sol', 'dado')). toBe("soldado")
    });
})

describe ('concatenarArrays', ()=> {
    test ('[1] com [2] resultado [1,2]', ()=> { 
        expect(lib.concatenarArrays([1],[2])). toEqual([1,2])
    })
})
    



