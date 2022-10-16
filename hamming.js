const extendList = (list) => list.map((x) => extendBits([...x]));
const extraBits = 4;

function extendBits(row) {
   //add extra bits
   for (let i = 0; i < 4; i++) {
      const extraBitsPos = (1 << i) - 1;
      row.splice(extraBitsPos, 0, 0);
   }
   for (let i = 0; i < 4; i++) {
      const extraBitsPos = (1 << i) - 1;
      for (let j = 0; j < row.length; j++) {
         if ((j + 1) % (2 << i) < 1 << i) continue;
         row[extraBitsPos] ^= row[j];
      }
   }
   return row;
}

const validateList = (list) => list.map((x) => validate(x));

function validate(row) {
   const checks = [];

   for (let i = 0; i < 4; i++) {
      for (let j = 0; j < row.length; j++) {
         if ((j + 1) % (2 << i) < 1 << i) continue;
         checks[i] ^= row[j];
      }
   }

   let result = 0;

   for (let i = 0; i < 4; i++) {
      result += checks[i] << i;
   }
   return result;
}
