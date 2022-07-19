// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

//abdsfdcfqb
let palindirom = (argStr) => {
  let count = {};
  let str = '';
  let dp = 0;
  for (const item of argStr) {
    if (count[item]) {
      if (count[item] == 1) {
        dp--;
      }
      count[item]++;
    } else {
      dp++;
      count[item] = 1;
    }
  }
  let isRmd = false;
  let remove = [];
  Object.keys(count).forEach((item) => {
    if (count[item] == 1) {
      remove.push(item);
    } else if (count[item] % 2 != 0) {
      str += Array(count[item]).join(item);
    } else {
      str += Array(count[item] + 1).join(item);
    }
  });
  str += remove[0];
  console.log(str, 'str');
  return str;
};

// bbddsffcq
// abdsfdcfqb
let time = new Date().getTime();

function createPalindrome(st) {
  st = palindirom(st);
  let strCount = {};
  for (const item of st) {
    if (strCount[item]) {
      strCount[item]++;
    } else strCount[item] = 1;
  }

  let left = '';
  let right = '';
  let center = '';

  Object.keys(strCount).forEach((item, index) => {
    let dv = 2;
    if (strCount[item] > 1) {
      dv = strCount[item] / 2;
      left += Array(dv + 1).join(item);
      right += Array(dv + 1).join(item);
    } else if (strCount[item] == 1) {
      center = item;
    }
  });

  let ans = left + center + Array.from(right).reverse().join('');
  return ans;
}

function isPalindrome(st) {
  let reverse = '';
  for (let i = st.length - 1; i >= 0; i--) {
    reverse += st[i];
  }

  return reverse === st;
}
// ddefefq

console.log('result', createPalindrome(palindirom('abcbadefqfed')));
let co = new Date().getTime() - time;
console.log(co / 1000 + ' sec');
