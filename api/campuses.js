const express = require("express");
const router = express.Router();
const {Campus, Student} = require("../database");

// GeET Campuses
router.get("/", async (req, res, next) => {
    try {
        const campuses = await Campus.findAll({include: Student});
        Campus ? res.json(campuses): res.sendStatus(404); //Shortcut if/else statement lol
    } catch (err) {
      next(err);
    }

});

// Single Campus
router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findbyPK(req.params.id, {include: Student, });
    res.json(campus);
  } catch (err) {
    next(err);
  }

});

module.exports = router;
