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
    const student = await Student.findbyPK(req.params.id, {include: Campus});
    Student ? res.json(student): res.sendStatus(404);  //Shortcut if/else statement lol
  } catch (err) {
    next(err);
  }

});

module.exports = router;
