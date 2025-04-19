const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
const{ name, address: { city, street: { name: streetName, number } } } = people[0];
console.log(name + " lives in " + city + ", on " + streetName + " number " + number);
