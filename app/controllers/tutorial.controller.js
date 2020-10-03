const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// create and  save a new tutorial
exports.create = (req, res) => {
  // validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "content can not be empty",
    });

    return;
  }

  // Create tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error while creating Tutorial",
      });
    });
};

// retrieve all
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? {
        title: {
          [Op.iLike]: `%${titel}%`,
        },
      }
    : null;

  Tutorial.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "there is no tutorial with that title",
      });
    });
};

// find a single tutorial by id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Tutorial.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "there is no tutorial with that id",
      });
    });
};

// update a tutorial
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully",
        });
      } else {
        res.send({
          message: "Cannot update Tutorial",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "internal server error",
      });
    });
};

// delete a tutorial
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deletd successfully",
        });
      } else {
        res.send({
          message: "That tutorial can not deleted",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Deleted Failed",
      });
    });
};

// delele all tutorial
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Tutorials was deleted successfully`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Deleted  all Failed",
      });
    });
};

// find published tutorial
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "find All",
      });
    });
};
