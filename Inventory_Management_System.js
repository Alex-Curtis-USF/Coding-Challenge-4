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

//Create displayProductDetails function

function updateStock(inventory, unitsSold) {
    inventory.quantity -= unitsSold;
    inventory.quantity = Math.max(inventory.quantity, 0);
    if (inventory.quantity === 0) {
        return `${product.name} is out of stock`
    } 
    else if (inventory.quantity <= inventory.lowStockLevel) {
        return `${product.name} is low in stock. The current quantity is ${product.quantity}`
    }
    else {
        return `${product.name} is in stock. The current quantity is ${product.quantity}`;
    }
}
