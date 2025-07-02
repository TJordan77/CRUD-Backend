const express = require("express");
const router = express.Router();
const {Campus, Student} = require("../database");

// GeET Campuses
router.get("/", async (req, res, next) => {
    try {
        const campuses = await Campus.findAll({include: Student});
        //Campus ? res.json(campuses): res.sendStatus(404); //Shortcut if/else statement lol
        res.json(campuses);   
    } catch (err) {
      next(err);
    }

});

// Single Campus
router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id, {include: Student, }); //minor fix: findbyPK
    if (campus) {
      res.json(campus);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }

});

module.exports = router;
