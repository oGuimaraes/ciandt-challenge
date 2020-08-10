const distance = 149600000;
const avgSpeed = 28440;

function timeInDays(dist, avgSpeed) {
  const travelTimeInHours = dist / avgSpeed;
  const travelTimeInDays = travelTimeInHours / 24;

  return travelTimeInDays;
}

console.log(timeInDays(distance, avgSpeed));
