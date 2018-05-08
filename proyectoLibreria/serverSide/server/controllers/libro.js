const models = require("../models")
const { libro } = models

module.exports = {
  retrieve(req, res) {
    console.log("RETRIEVE LIBRO", req.params)
    return libro
      .findById(req.params.libroId)
      .then(libro => {
        if (!libro) {
          return res.status(404).send({ message: "Libro no encontrado" })
        }
        return res.status(200).send(libro)
      })
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    console.log("LIST LIBRO", req.params)
    return libro
      .all()
      .then(libros => res.status(200).send(libros))
      .catch(error => res.status(400).send(error))
  },
  create(req, res) {
    console.log("CREATE LIBRO", req.params)
    return libro
      .create({
        titulo: req.body.titulo,
        resumen: req.body.resumen,
        autor: req.body.autor,
        editorial: req.body.editorial,
        imageUrl: req.body.imageUrl,
        precio: req.body.precio,
        stock: req.body.stock
      })
      .then(libro => res.status(201).send(libro))
      .catch(error => res.status(400).send(error))
  },
  update(req, res) {
    console.log("UPDATE LIBRO", req.params)
    return libro
      .findById(req.params.libroId)
      .then(libro => {
        if (!libro) {
          return res.status(404).send({
            message: "Libro no encontrado"
          })
        }
        return libro
          .update({
            titulo: req.body.titulo || libro.titulo,
            resumen: req.body.resumen || libro.resumen,
            autor: req.body.autor || libro.autor,
            editorial: req.body.editorial || libro.editorial,
            imageUrl: req.body.imageUrl || libro.imageUrl,
            precio: req.body.precio || libro.precio,
            stock: req.body.stock || libro.stock
          })
          .then(() => res.status(200).send(libro))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },
  destroy(req, res) {
    console.log("ELIMINANDO LIBRO", req.params)
    return libro
      .findById(req.params.libroId)
      .then(libro => {
        if (!libro) {
          return res.status(400).send({
            message: "Libro no encontrado"
          })
        }
        return libro
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
}
