let myMap = new Map();
myMap.set('dolly', 'bisen');
myMap.set("bisen","dolly");

console.log(myMap.size);
console.log(myMap.has("bar"));
console.log(myMap.has("dolly"));

myMap.clear();
console.log(myMap.size);

console.log(myMap.clear());