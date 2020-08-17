const totalArea = 2827.43;
const centralArea = 314.15;
const sectors = 8;

function calculateArea(totalArea, centralArea, sectors) {
  const area = (totalArea - centralArea) / sectors;
  return `${area}m²`;
}

console.log(calculateArea(totalArea, centralArea, sectors));
