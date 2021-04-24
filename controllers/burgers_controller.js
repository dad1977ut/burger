const express = require("express");
const router = express.Router();
const burger = require("../models/burger");
router.get("/", (req, res) => {
  burger.all((data) => {
    const bObject = {
      burgers: data,
    };
    console.log(bObject);
    res.render("index", bObject);
  });
});
router.post("/api/burgers", (req, res) => {
  burger.insert(req.body, (data) => {
    res.json({ id: data.insertId });
  });
});
router.put("/api/burgers/:id", (req, res) => {
  const bArray = [{ devoured: req.body.devoured }, { id: req.params.id }];
  console.log(bArray);
  burger.update(bArray, (data) => {
    console.log(data);
    res.json({ ok: true });
  });
});
module.exports = router;
