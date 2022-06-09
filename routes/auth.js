import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("1");
});

export default router;
