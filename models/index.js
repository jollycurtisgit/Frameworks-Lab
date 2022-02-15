const bookshelf = require('../bookshelf/index.js') 

const Product = bookshelf.model('Product',{
    tableName:'products' //which table is this model referring to (this must always be plural)
})

module.exports = { Product };