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

  console.log(dp, 'dp');
  console.log(str, 'xx');
};

palindirom('abdsfdcfqb');
// bbddsffcq
// abdsfdcfqb
