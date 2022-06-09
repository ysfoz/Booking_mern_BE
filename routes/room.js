import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("3");
});

export default router;