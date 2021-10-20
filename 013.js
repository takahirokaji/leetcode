const romanToInt = (s) => {
  let roman = s.split("");
  let map = new Map();
  map.set("M", 1000);
  map.set("D", 500);
  map.set("C", 100);
  map.set("L", 50);
  map.set("X", 10);
  map.set("V", 5);
  map.set("I", 1);

  roman = roman.map((el) => map.get(el));
  romanLength = roman.length;
  for (let i = 0; i < romanLength; i++) {
    if (roman[i] < roman[i + 1]) roman[i] = -roman[i];
  }
  let total = roman.reduce((sum, el) => sum + el, 0);
  return total;
};

console.log(romanToInt("MCDLXXVI"));
