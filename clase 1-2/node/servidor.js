var fs = require("fs")
var http = require("http")
var pagina
var server

const fileAsync = fs.readFile("pagina.txt", function callback(err, data) {
  if (err) throw err
  pagina = data.toString()

  server = http.createServer(function(request, response) {
    // response.writeHead(200, { "Content-Type": "text/html" });
    // response.write("<!DOCTYPE html>");
    // response.write("<html>");
    // response.write("<head>");
    // response.write("<title>Curso Backend</title>");
    // response.write("</head>");
    // response.write("<body>");
    // response.write("Hello World!");
    // response.write("</body>");
    // response.write("</html>");
    response.write(pagina)
    response.end()
  })

  server.listen(80)
  console.log("Server is listening")
})
