const storage = {
  name: "Fake Storage",
  address: "HN",
  owner: "Chinh Do",
  items: [
    { id: 1, name: "Product 1", category: "Furniture", price: 20 },
    { id: 2, name: "Product 2", category: "Device", price: 110 },
    { id: 3, name: "Product 3", category: "Cloth", price: 2 },
  ],
};

let input = Number(prompt("Nhap vao action"));
// if ((input = 1)) editStorage();
if ((input = 2)) addItem();
// if ((input = 3)) searchItem();
if ((input = 4)) deleteItem();

// function editStorage() {
//   storage.items[0].name = "Product 4";
//   console.log(items);
// }

function addItem() {
  let item = { id: 4, name: "Product 4", category: "Food", price: 100 };
  storage.items.push(item);
  console.log(items);
}

// function searchItem() {
//   let input = str(prompt("Nhap vao ten mat hang"));
//   for (i = 0; i < items.length; i++)
//     if (items[i].name.includes(input)) console.log(items.name);
//     else console.log("Khong co mat hang nay ton tai");
// }

function deleteItem() {
  delete storage.items[2];
  console.log(items);
}
