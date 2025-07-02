const express = require("express");
const router = express.Router();
const {Campus, Student} = require("../database");

// GET Campuses
router.get("/", async (req, res, next) => {
    try {
        const campuses = await Campus.findAll({include: Student});
        res.json(campuses);
    } catch (err) {
      next(err);
    }

});

// Single Campus
router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findbyPK(req.params.id, {include: Student, });
    campus ? res.json(campus) : res.sendStatus(404);  // Shortcut if/else statement lol
  } catch (err) {
    next(err);
  }

});

// POST Campus
router.post("/", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.status(201).json(newCampus);
  } catch (err) {
    next(err);
  }
});

// DELETE Campus
router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Campus.destroy({where: { id: req.params.id }});
    deleted ? res.sendStatus(204) : res.status(404).send("Campus not found");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
