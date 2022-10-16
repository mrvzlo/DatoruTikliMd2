const gen = 0b1101111;
const degree = 6;

function extend(value) {
   const ext = value << degree;
   return ext ^ getMod(ext, gen);
}

function getMod(a, b) {
   while (a >= b) {
      let aSize = 0;
      let bSize = 0;
      for (; a >> aSize > 0; aSize++);
      for (; b >> bSize > 0; bSize++);
      // a_new = a_old xor c where c = b * 2 ^ (a.size - b.size);
      a ^= b << (aSize - bSize);
   }
   return a;
}

function validateCrc(value) {
   return getMod(value, gen) == 0;
}
