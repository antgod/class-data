const { tokenizer, parser } = require('./编译器')

const tokens = tokenizer('(add 2 (subtract 4 2))')

console.dir(tokens)
console.dir(JSON.stringify(parser(tokens), null, 2))