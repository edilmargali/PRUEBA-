const db = require("../models");
const Grupo = db.grupos;
const Op = db.Sequelize.Op;

//Crear y guardar un nuevo grupo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a grupo
  const grupos = {
    nombre: req.body.nombre,
    curso: req.body.curso,
    integrantes: req.body.integrantes,
    published: req.body.published ? req.body.published : false
  };

  //Guardar grupo en la base de datos
  Grupo.create(grupos)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the grupo."
      });
    });
};

// Recupere todos los grupo de la base de datos.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Grupo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Grupo."
      });
    });
};

// Encuentra un solo grupo con una identificación
exports.findOne = (req, res) => {
  const id = req.params.id;

  Grupo.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Grupo with id=" + id
      });
    });
};

// Actualizar un Grupo por el id en la solicitud
exports.update = (req, res) => {
  const id = req.params.id;

  Grupo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Grupo was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Grupo with id=${id}. Maybe grupo was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating grupo with id=" + id
      });
    });
};

// Eliminar un Grupo con la identificación especificada en la solicitud
exports.delete = (req, res) => {
  const id = req.params.id;

  Grupo.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Grupo was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Grupo with id=${id}. Maybe Grupo was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Grupo with id=" + id
      });
    });
};

// Elimine todos los Grupo de la base de datos.
exports.deleteAll = (req, res) => {
  Grupo.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Grupo were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Grupo."
      });
    });
};

// encontrar todos los Grupo publicados
exports.findAllPublished = (req, res) => {
  Grupo.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Grupo."
      });
    });
};





