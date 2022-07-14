// Square code

console.group('Square');

const sideSquare = prompt("Ingrese el lado del cuadrado");

console.log(`Cada lado del cuadrado es: ${sideSquare} cm`);

const perimeterSquare = sideSquare * 4;
const areaSquare = sideSquare ** 2;

console.log(`El perímetro del cuadrado es: ${perimeterSquare} cm`);

console.log(`El área del cuadrado es: ${areaSquare} cm²`);
console.groupEnd();

// Triangle code

console.group('Triangle');
const firstSideTriangle = prompt("Ingrese el primer lado del triángulo");
const secondSideTriangle = prompt("Ingrese el segundo lado del triángulo");
const baseTriangle = prompt("Ingrese la base del triángulo");
const heightTriangle = prompt("Ingrese la altura del triángulo");

console.log(`El primer lado del triángulo es: ${firstSideTriangle} cm`);
console.log(`El segundo lado del triángulo es: ${secondSideTriangle} cm`);
console.log(`La base del triángulo es: ${baseTriangle} cm`);
console.log(`La altura del triángulo es: ${heightTriangle} cm`);

const perimeterTriangle = firstSideTriangle + secondSideTriangle + baseTriangle;
const areaTriangle = baseTriangle * heightTriangle / 2;

console.log(`El perímetro del triángulo es: ${perimeterTriangle} cm`);

console.log(`El área del triángulo es: ${areaTriangle} cm²`);
console.groupEnd();

// Circle code

console.group('Circle');

const radiusCircle = prompt("Ingrese el radio del círculo");

console.log(`El radio del círculo es: ${radiusCircle} cm`);

const diameterCircle = radiusCircle * 2;
const PI = Math.PI;

console.log(`El diámetro del círculo es: ${diameterCircle} cm`);
console.log(`La constante PI es: ${PI}`);

const perimeterCircle = diameterCircle * PI;
const areaCircle = radiusCircle ** 2 * PI;

console.log(`El perímetro del círculo es: ${perimeterCircle} cm`);

console.log(`El área del círculo es: ${areaCircle} cm²`);

console.groupEnd();