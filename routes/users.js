import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("4");
});

export default router;