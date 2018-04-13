var express = require("express")
var app = express()
// var ejs = require("ejs")
var fs = require("fs")

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", function(req, res, next) {
  const fileAsync = fs.readFile("productos.json", "utf8", function callback(
    err,
    data
  ) {
    if (err) throw err

    let objProd = JSON.parse(data)

    res.render("index.ejs", {
      nombre: "Atilio",
      apellido: "Romagnoli",
      paises: ["Argentina", "Australia", "Bolivia"],
      productos: objProd.productos
    })
  })
})

app.get("/posts", function(req, res, next) {
  const fileAsync = fs.readFile("posts.json", "utf8", function callback(
    err,
    data
  ) {
    if (err) throw err

    let id = parseInt(req.query.id)
    let title = req.query.title
    let profileId = parseInt(req.query.profileId)

    let readFile = JSON.parse(data)

    const postsfilt = readFile.posts.filter(post => {
      if (id) return id === post.id
      if (title) return title === post.title
      if (profileId) return profileId === post.profileId
    })

    const commentfilt = readFile.comments.filter(
      comment => comment.postId === postsfilt[0].id
    )

    const profilefilt = readFile.profile.filter(
      prof => prof.id === postsfilt[0].id
    )

    res.render("posts.ejs", {
      posts: postsfilt,
      comments: commentfilt,
      profiles: profilefilt
    })
  })
})

app.listen(3000)
