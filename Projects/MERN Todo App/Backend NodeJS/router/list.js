const express = require('express');
const router = express.Router();
const listController = require('../controller/list');
router.post("/add", listController.insert);
router.get("/get", listController.fetch);
router.put("/update", listController.update);
router.delete("/delete", listController.remove);

module.exports = router;