const myCallback = () => console.log(3);
console.log(1);
console.log(2);
setTimeout(myCallback, 1000);
console.log(4);