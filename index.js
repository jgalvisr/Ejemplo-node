const fs = require('fs');
var respArr = [];

var rawData = fs.readFileSync('data/products-ecommerce.json');
var data = JSON.parse(rawData);

for (let i = 0; i < data.items.length; i++) {
  let item = data.items[i];
  if (item.price.amount < 10000)
    respArr.push(item);
}

var resp = "";
respArr.forEach(item => {
  let str = JSON.stringify(item, null, 2);
  resp += str + ",\n";
})

try {
  fs.writeFileSync("data/products-filtered.json", resp);
  console.log("File written successfully\n");
} catch(err) {
  console.log(err);
}