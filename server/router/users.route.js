const express = require("express");
const usersModel = require("../models/users.model");
const router = express.Router();
var bcrypt = require("bcryptjs");

router.get("/", async function (req, res) {
  const list = await usersModel.all();
  res.json(list);
});

router.post("/", async function (req, res) {
  const user = req.body;
  user.card = user.card.split(" ").join("");

  await usersModel
    .add(user)
    .then((result) => {
      res.status(201).json({
        message: "add success",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/", async function (req, res) {
  res.status(201).json({ message: "edit success" });
});

router.delete("/:id", async function (req, res) {
  const id = req.params.id || 0;
  if (id === 0) {
    return res.status(304).end();
  }
  await usersModel.delete(id);
  res.json({
    message: "delete success",
  });
});

module.exports = router;
