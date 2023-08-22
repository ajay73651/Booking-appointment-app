const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    fs.readFile("message.txt", "utf8", (err, data) => {
      if (!err) {
        const messages = data
          .split("\n")
          .filter((message) => message.trim() !== "");
        messages.forEach((message) => {
          res.write(`<p>${message}</p>`);
        });
      }
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
      );

      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.appendFile("message.txt", message + "\n", (err) => {
        if (!err) {
          res.statusCode = 302;
          res.setHeader("Location", "/");
        }
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
  }
};


// module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     sometext : 'Some hard coded text',
// }

// module.exports.handler = requestHandler;
// module.exports.sometext = 'Some hard coded text';

exports.handler = requestHandler;
exports.sometext = 'Some hard coded text';
