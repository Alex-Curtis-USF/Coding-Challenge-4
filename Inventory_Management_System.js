// Create an Inventory Array of Product Objects

let inventory = [ {
    name: 'Notebook',
    price: 3,
    quantity: 12,
    lowStockLevel: 10
}, {
    name: 'Paper',
    price: 5,
    quantity: 30,
    lowStockLevel: 40
}, {
    name: 'Pen',
    price: 2,
    quantity: 100,
    lowStockLevel: 50
}, {
    name: 'Pencil',
    price: 1,
    quantity: 75,
    lowStockLevel: 100
}, {
    name: 'Stapler',
    price: 10,
    quantity: 20,
    lowStockLevel: 10
}
]

// Create a Function to Display Product Details

function displayProductDetails(inventory) {
    let IsItInStock = inventory.quantity > inventory.lowStockLevel ? "In Stock" : "Low Stock";

    console.log(`Name: ${inventory.name}`);
    console.log(`Price: $${inventory.price}`);
    console.log(`Quantity: ${inventory.quantity}`);
    console.log(`In Stock: ${IsItInStock}`);
}
inventory.forEach(product => {
    displayProductDetails(product);
});

//Create displayProductDetails function

function updateStock(inventory, unitsSold) {
    inventory.quantity -= unitsSold;
    inventory.quantity = Math.max(inventory.quantity, 0);
    if (inventory.quantity === 0) {
        return `${inventory.name} is out of stock`
    } 
    else if (inventory.quantity <= inventory.lowStockLevel) {
        return `${inventory.name} is low in stock. The current quantity is ${inventory.quantity}`
    }
    else {
        return `${inventory.name} is in stock. The current quantity is ${inventory.quantity}`;
    }
}
updateStock(inventory[0], 5);

// Create a Function to Check Low Stock Products

function checkLowStock(inventory) {
    console.log("Products with low stock:")
    inventory.forEach(inventory => {
        if (inventory.quantity <= inventory.lowStockLevel) {
            return inventory.name;
        }
    });
}
checkLowStock(inventory);

// Create calculateInventoryValue function

function calculateInventoryValue(inventory) {
    return inventory.reduce((total, inventory) => total + inventory.price * inventory.quantity, 0);
}
let totalValue = calculateInventoryValue(inventory);
console.log(totalValue);

// Create a Function to Process a Sale

function processSale(inventoryName, unitsSold) {
    let product = inventory.find(inventory => inventory.name)
    if (product) {
        return updateStock(product, unitsSold);
    }
    else {
        return `Error: '${inventory.name}' is not found in the inventory`;
    }
}
console.log(processSale('Notebook', 3));