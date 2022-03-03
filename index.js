const fs = require('fs');
const items = null;

fs.readFile('products-ecommerce.json', 'utf-8', (err, data) => {
  items = data;
})