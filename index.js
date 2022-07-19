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
  str += remove[remove.length - 1];
  return str;
};

console.log('abcdeff', palindirom('aaabbbbc'));

// bbddsffcq
// abdsfdcfqb
let time = new Date().getTime();

function createPalindrome(st) {
  let strCount = {};
  for (const item of st) {
    if (strCount[item]) {
      strCount[item]++;
    } else strCount[item] = 1;
  }

  let left;
  let right;
  let center;

  Object.keys(strCount).forEach((item) => {
    let dv = 2;
    if (item > 1) {
      dv = item / 2;
      
    } else if (item == 1) {
      center = strCount[item];
    }
  });

  console.log(strCount, 'strCount');
}

function isPalindrome(st) {
  let reverse = '';
  for (let i = st.length - 1; i >= 0; i--) {
    reverse += st[i];
  }

  return reverse === st;
}
// ddefefq

console.log('ddefefq', createPalindrome('aabbc'));
let co = new Date().getTime() - time;
console.log(co / 1000 + ' sec');
