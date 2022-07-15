// Square code

const perimeterSquare = side => `${(side * 4).toFixed(2)} cm`;
const areaSquare = side => `${(side ** 2).toFixed(2)} cm²`;

// Triangle code

const perimeterTriangle = (firstSide, secondSide, base) =>
`${(parseFloat(firstSide) + parseFloat(secondSide) + parseFloat(base)).toFixed(2)} cm`;
const areaTriangle = (base, height) => `${(base * height / 2).toFixed(2)} cm²`;

// Circle code

const diameterCircle = radius => radius * 2;

const perimeterCircle = radius => `${(diameterCircle(radius) * Math.PI).toFixed(2)} cm`;

const areaCircle = radius => `${(radius ** 2 * Math.PI).toFixed(2)} cm²`;