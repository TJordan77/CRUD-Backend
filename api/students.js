const express = require("express");
const router = express.Router();
const {Campus, Student} = require("../database");

// GET Students
router.get("/", async (req, res, next) => {
    try {
        const students = await Student.findAll({include: Campus});
        res.json(students);
    } catch (err) {
      next(err);
    }

});

// All the Single Students! All the Single Students!
router.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id, {include: Campus});
    student ? res.json(student): res.sendStatus(404);  //Shortcut if/else statement lol
  } catch (err) {
    next(err);
  }

});

// POST Student
router.post("/", async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (err) {
    next(err);
  }
});

// DELETE Students
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Student.destroy({where: {id: req.params.id}});
    deleted ? res.sendStatus(204) : res.status(404).send("Student not found");
  } catch (err) {
    next(err);
  }
})
// PUT Students
router.put("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) {
      await student.update({ campusId: req.body.campusId });
      res.json(student);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
