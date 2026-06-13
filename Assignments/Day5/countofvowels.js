let text = "Automation";

if (text.length <= 0) console.log("0");
else {
  let countofvowels = 0;
  for (let i = 0; i <= text.length; i++) {
    if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") countofvowels++;
  }

  console.log(countofvowels+1);
}