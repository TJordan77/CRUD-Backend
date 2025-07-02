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
    const student = await Student.findByPk(req.params.id, {include: Campus}); //minor fix: findbyPK
    //Student ? res.json(student): res.sendStatus(404);  //Shortcut if/else statement lol
    //this line comment above check for model,not the result
    if (student) {
      res.json(student);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }

});

module.exports = router;
