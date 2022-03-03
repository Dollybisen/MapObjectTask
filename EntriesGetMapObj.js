// Map.prototype.get()
const myMap = new Map();
myMap.set("office","employee");
myMap.set("collage","students");

console.log(myMap.get("office"));
console.log(myMap.get('students'));
console.log(myMap.get("doly"));

//Map.prototype.entries()

const map2 = new Map();
map2.set("office","employee");
map2.set("collage","students");

const mapIter = map2.entries();
console.log(mapIter.next().value);
console.log(mapIter.next().value);