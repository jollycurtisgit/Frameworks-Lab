// If we require a directory or folder instead of
//nodejs will default to look for index.js
const bookshelf = require('../bookshelf/index.js') 

// for consistency, we keep the name of the model
// to be the same as the database, but the singular and the first alphabet is uppercase
const Product = bookshelf.model('Product',{
    tableName:'products' //which table is this model referring to (this must always be plural)
})

module.exports = { Product };