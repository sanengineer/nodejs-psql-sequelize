module.exports = app {
    const tutorials = require ("../controllers/tutorial.controller")

    var router = require('express').Router()

    router.post("/")
    router.get("/")
    router.get("/:id")
    router.get("/published")
    router.put("/:id")
    router.delete("/:id")
    router.delete("/")
}