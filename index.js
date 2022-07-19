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
  Object.keys(count).forEach((item) => {
    if (count[item] == 1 && dp != 1) {
      // str += item;
      dp--;
      isRmd = true;
    } else {
      str += Array(count[item] + 1).join(item);
    }
  });

  return str;
};

console.log('abdsfdcfqb');
console.log(palindirom('abdsfdcfqb'));

// bbddsffcq
// abdsfdcfqb

function longestPalindromicSubstring(st) {
  let permutation = [];

  if (st.length === 1) return st.charAt(0);

  let newString = '';

  for (let i = 0; i < st.length; i++) {
    newString = st[i];
    if (!permutation.includes(newString)) {
      permutation.push(newString);
    }
    for (let j = i + 1; j < st.length; j++) {
      newString += st[j];
      if (!permutation.includes(newString)) {
        permutation.push(newString);
      }
    }
  }

  let currentMax = 0;
  let currentPalindrome = '';

  for (const elem of permutation) {
    if (isPalindrome(elem)) {
      if (elem.length > currentMax) {
        currentMax = elem.length;
        currentPalindrome = elem;
      }
    }
  }

  console.log(permutation);

  return currentPalindrome;
}

function isPalindrome(st) {
  let reverse = '';
  for (let i = st.length - 1; i >= 0; i--) {
    reverse += st[i];
  }

  return reverse === st;
}

console.log('x', longestPalindromicSubstring(palindirom('aaccca')));
