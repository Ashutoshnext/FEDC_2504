const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Shirt", price: 40, category: "Clothing" },
    { name: "Book", price: 20, category: "Stationery" },
    { name: "Shoes", price: 100, category: "Clothing" }
];

// 1. Map the array to get an array of product namesupercase
const nameuppercase = products.map(({ name }) => name.toUpperCase());
console.log(`Product names in uppercase: ${nameuppercase}`);

// 2. Filter the array to get only Electronics products
const filteredproduct = products.filter(({ category }) => category === "Electronics");
console.log(filteredproduct);

// 3. Sort the array by price in descending order
const sortedProducts = products.sort((a, b) => b.price - a.price);
console.log(sortedProducts);

// 4.forEach product, log a message with its name and price
products.forEach(({ name, price }) => console.log(`Product: ${name}, Price: $${price}`));


// 5. Reduce the array to get the total price of products
const totalPrice = products.reduce((acc, { price }) => acc + price, 0);
console.log(`Total price of all products: $${totalPrice}`);
