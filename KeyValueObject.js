//Map.prototype.keys()
const map2 = new Map();
map2.set("0509","number");
map2.set("bisen","Dolly");
 
const iterator = map2.keys();
console.log(iterator.next().value);
console.log(iterator.next().value);

// Map.prototype.values()
const myMap = new Map();
myMap.set("12","num");
myMap.set("bisen","dolly");
myMap.set({}, 'empty');

const mapIter = myMap.values();
console.log(mapIter.next().value);
console.log(mapIter.next().value);
console.log(mapIter.next().value);