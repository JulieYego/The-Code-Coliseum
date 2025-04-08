const test = 'The cut that always bleeds cut Cut';

const countWords = (test) => {
  const wordObj = {};
  const testArr = test.toLowerCase().split(' ');
  for (const word of testArr) {
    if (word in wordObj) {
      wordObj[word] += 1;
    } else {
      wordObj[word] = 1;
    }
  }
  return wordObj;
};

console.log(countWords(test));
