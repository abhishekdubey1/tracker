function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default function randomArray() {
  let array = [];
  for (let i = 0; i < 30; i++) {
    array[i] = {
      name: `Page ${getRandomArbitrary(1, 100000)}`,
      pv: getRandomArbitrary(1500, 10000),
    };
  }
  return array;
}
