const http = require("http");

module.exports.httpRequest = function(options, postData) {
  return new Promise((resolve, reject) => {
    //console.log(postData);
    options.headers["Content-Length"] = Buffer.byteLength(postData);

    const req = http.request(options, res => {
      //console.log(`STATUS: ${res.statusCode}`);
      //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
      res.setEncoding("utf8");
      res.on("data", chunk => {
        //console.log(`BODY: ${chunk}`);
      });
      res.on("end", () => {
        resolve({
          "status" : res.statusCode, 
          "headers" : JSON.stringify(res.headers)
        });
        // console.log("No more data in response.");
        // console.log(`STATUS: ${res.statusCode}`);
        // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
      });
    });

    req.on("error", e => {
      reject(`problem with request: ${e.message}`)
     // console.error(`problem with request: ${e.message}`);
    });

    // write data to request body

    req.write(postData);
    req.end();
  });
};
