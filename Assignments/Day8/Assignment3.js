import {readFile, writeFile} from 'fs/promises'

await writeFile('./Assignments/Day8/Demo.txt',
    "Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on Cl, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.")

const filecontent = await readFile('./Assignments/Day8/Demo.txt', { encoding: 'utf8' });

if(filecontent.includes("headless")) {
    console.log("Headless support confirmed");
}
else {
    console.log("Headless support missing")
}