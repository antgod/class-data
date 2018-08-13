const { tokenizer, parser, compiler } = require('./compiler')

const tokens = tokenizer('(add 2 (subtract 4 2))')

console.dir(JSON.stringify(parser(tokens)))