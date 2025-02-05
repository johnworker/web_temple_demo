const express = require("express");
const Temple = require("../models/temple");
const router = express.Router();

// 取得所有宮廟
router.get("/", async (req, res) => {
  const temples = await Temple.find();
  res.json(temples);
});

// 取得單一宮廟
router.get("/:id", async (req, res) => {
  const temple = await Temple.findById(req.params.id);
  res.json(temple);
});

// 新增宮廟
router.post("/", async (req, res) => {
  const temple = new Temple(req.body);
  await temple.save();
  res.status(201).json(temple);
});

module.exports = router;
