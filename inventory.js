// Define the item class
class Item {
  constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

// Inventory array
let inventory = [];

// Add item to the inventory
function addItem(inventory, item) {
  inventory.push(item);
}

// Update item details in the inventory
function updateItem(inventory, id, newDetails) {
  const item = inventory.find(item => item.id === id);
  if (item) {
    Object.assign(item, newDetails);
  }
}

// Delete item from the inventory
function deleteItem(inventory, id) {
  const index = inventory.findIndex(item => item.id === id);
  if (index !== -1) {
    inventory.splice(index, 1);
  }
}

// Get an item from the inventory
function getItem(inventory, id) {
  return inventory.find(item => item.id === id);
}

// Print the inventory in a readable format
function printInventory(inventory) {
  console.log(JSON.stringify(inventory, null, 2));
}

// Example usage:
const apple = new Item(1, 'Apple', 10, 0.5);
const banana = new Item(2, 'Banana', 20, 0.2);
const orange = new Item(3, 'Orange', 15, 0.7);

addItem(inventory, apple);
addItem(inventory, banana);
addItem(inventory, orange);

updateItem(inventory, 2, { quantity: 30 });  // Updating the quantity of bananas
deleteItem(inventory, 1);                   // Deleting apple from inventory

printInventory(inventory);                  // Output the current state of inventory
