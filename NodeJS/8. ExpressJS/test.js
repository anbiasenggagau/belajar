x = {};
y = { key: "y" };
z = { key: "z" };

x[y] = 7820;
console.log(x[z])
console.log(x)
x[z] = 3210;
console.log(z)
console.log(x)

console.log(x[y]);