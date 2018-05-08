const controllers = require("../controllers")
const libroController = controllers.libro
const clienteController = controllers.cliente

module.exports = app => {
  app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*")

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")

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

  app.get("/", (req, res) =>
    res.status(200).send({
      message: "Bienvenido a la API de la librería."
    })
  )

  app.get("/libros", libroController.list)
  app.get("/libros/:libroId", libroController.retrieve)
  app.post("/libros", libroController.create)
  app.put("/libros/:libroId", libroController.update)
  app.delete("/libros/:libroId", libroController.destroy)

  //   app.post("/api/todos/:todoId/items", todoItemsController.create)
  //   app.put("/api/todos/:todoId/items/:todoItemId", todoItemsController.update)
  //   app.delete("/api/todos/:todoId/items/:todoItemId", todoItemsController.destroy)

  // app.all("/api/todos/:todoId/items", (req, res) =>
  //   res.status(405).send({
  //     message: "Method Not Allowed"
  //   })
  // )
}
