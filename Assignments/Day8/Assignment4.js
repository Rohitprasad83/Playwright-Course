import { readFile, writeFile, appendFile } from "fs/promises";

async function fileContentCheck() {
  await writeFile(
    "./Assignments/Day8/Demo.txt",
    "Playwright related information",
  );

  await appendFile(
    "./Assignments/Day8/Demo.txt",
    "Playwright supports API testing. While primarily known for its Ul automation capabilities, Playwright provides a powerful and convenient APIRequestContext object that allows direct interaction with REST APIs.",
  );

  const fileContent = await readFile("./Assignments/Day8/Demo.txt");

  if (fileContent.includes("API") && fileContent.includes("headless")) {
    console.log("API and headless both found");
  } else {
    console.log("Required keywords not found");
  }
}

fileContentCheck()
