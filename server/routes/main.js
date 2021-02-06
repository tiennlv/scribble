const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("Im alive").status(200);
});

module.exports = router;
