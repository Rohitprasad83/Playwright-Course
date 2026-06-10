let responseCode=200;
// let responseCode=404;
// let responseCode=500;
// let responseCode=401;
// let responseCode=302;



if(responseCode === 200) console.log("Test Passed");
else if(responseCode === 404) console.log("Page Not Found");
else if(responseCode === 500) console.log("Server Error");
else console.log("Unknown Status")


