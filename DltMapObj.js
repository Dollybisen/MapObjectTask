const map1 = new Map();
map1.set('Collage','Company');
map1.set("Student", "employee");
map1.set("Worker","learner");

console.log(map1.size);

// map1.clear();
// console.log(map1.size);

console.log(map1.delete('Collage'));
console.log(map1.delete("employee"))
console.log(map1.has('Company'))