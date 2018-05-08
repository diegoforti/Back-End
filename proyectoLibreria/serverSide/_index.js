var express = require("express")
var app = express()
var fs = require("fs")

app.set("views", "./views")
app.set("view engine", "ejs")

var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

function test() {
  console.log(test1)
  if (true) {
    var test1 = 11
  }
}

test()

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*")

  // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "access-control-allow-origin, X-Requested-With, Content-Type, Accept"
  )

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  res.setHeader("Content-Type", "application/json")
  next()
})

//Productos

app.get("/productos", function(req, res) {
  const fileAsync = fs.readFile("data.json", "utf8", function callback(err, data) {
    if (err) console.log(err)
    console.log("Entrando /productos")
    let objData = JSON.parse(data)

    // res.json(objData.productos)

    res.send(objData.libros)
  })
})

app.get("/productos/:filtro", function(req, res) {
  const fileAsync = fs.readFile("data.json", "utf8", function callback(err, data) {
    if (err) console.log(err)
    console.log("Entrando /productos/:filtro", req.params.filtro)
    let objData = JSON.parse(data)

    var filtered = objData.libros.filter(libro =>
      libro.titulo
        .trim()
        .toLowerCase()
        .includes(req.params.filtro.trim().toLowerCase())
    )
    console.log("filtered", filtered)
    objData.libros = filtered
    console.log("objData.productos", objData.libros)
    res.send(objData.libros)
  })
})

app.post("/productos", function(req, resp) {
  const rf = fs.readFile("data.json", "utf8", function callback(err, data) {
    if (err) console.log(err)
    console.log("guardando producto: ", req.body.titulo)
    let objData = JSON.parse(data)

    let libro = {
      id: objData.libros.length + 1,
      titulo: req.body.titulo,
      resumen: req.body.resumen,
      autor: req.body.autor,
      editorial: req.body.editorial,
      imageUrl: req.body.imageUrl,
      precio: req.body.precio,
      stock: req.body.stock
    }

    objData.libros.push(libro)
    fs.writeFileSync("data.json", JSON.stringify(objData))
  })

  resp.send()
})

//////////////libros

app.get("/", function(req, res) {
  const fileAsync = fs.readFile("data.json", "utf8", function callback(err, data) {
    if (err) console.log(err)

    let objData = JSON.parse(data)

    res.render("home.ejs", {
      libros: objData.libros
    })
  })
})

app.post("/libros", function(req, resp) {
  const rf = fs.readFile("data.json", "utf8", function callback(err, data) {
    if (err) console.log(err)

    let objData = JSON.parse(data)

    let libro = {
      id: objData.libros.length + 1,
      nombre: req.body.titulo,
      resumen: req.body.resumen,
      autor: req.body.autor,
      editorial: req.body.editorial,
      precio: req.body.precio,
      stock: req.body.stock
    }

    objData.libros.push(libro)
    fs.writeFileSync("data.json", JSON.stringify(objData))
  })

  resp.redirect("back")
})

app.listen(3050)
