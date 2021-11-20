const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const input1 = args[0];
const input2 = args[1];

request(input1, (error, response, body) => {
  fs.writeFile(input2, body, function(err) {
    if (err) {
      return console.log("Error");
    }
    
    console.log(`Downloaded and saved ${body.length} bytes to ${input2}`);
  });
});
