// CommonJs, everyfile is a module (by default)
// Modules - Encapsulated code (only share minimum)

const idan = 'AlAreef'
const secret ='IS This Secret'
const SayHi = (name) =>{
    console.log(`Hello there ${name}`)
}
// SayHi(idan)
// SayHi('Ameeeen')
// SayHi('Aisha')
module.exports = {
    SayHi: SayHi,
    idan: idan,
    secret: secret
}