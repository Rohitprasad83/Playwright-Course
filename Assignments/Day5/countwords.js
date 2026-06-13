let sentence = "JavaScript is easy to learn";

if (sentence.length <= 0) console.log("0");
else {
  let countOfWords = sentence.split(' ').length + 1;
  console.log(countOfWords)
}