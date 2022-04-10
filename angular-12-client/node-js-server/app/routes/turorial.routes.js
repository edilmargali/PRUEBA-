module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
   var router = require("express").Router();


  // Crea un nuevo tutorial
  router.post("/", tutorials.create);

  // Recuperar todos los tutoriales
  router.get("/", tutorials.findAll);

  // Recuperar todos los tutoriales publicados
  router.get("/PUBLICADO", tutorials.findAllPublished);

 // Recuperar un solo tutorial con id
  router.get("/:id", tutorials.findOne);

  // Actualizar un tutorial con id
  router.put("/:id", tutorials.update);

  // Eliminar un tutorial con id
  router.delete("/:id", tutorials.delete);

  // Eliminar todos los tutoriales
  router.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', router);





//// CREACION DE TABLA  GRUPOS



const  grupo=  require("../controllers/grupo.controller.js");
var router = require("express").Router();

    
// Crea un nuevo grupos
router.post("/", grupo.create);

// Recuperar todos los grupos
router.get("/", grupo.findAll);

// Recuperar todos los grupos publicados
router.get("/PUBLICADO", grupo.findAllPublished);

// Recuperar un solo grupos con id
router.get("/:id", grupo.findOne);

// Actualizar un grupos con id
router.put("/:id", grupo.update);

// Eliminar un grupos con id
router.delete("/:id", grupo.delete);

// Eliminar todos los grupos
router.delete("/", grupo.deleteAll);


app.use('/api/grupo', router);







};
