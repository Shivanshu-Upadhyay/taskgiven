const router = require('express').Router();
const listController = require('../controller/listController');
const ListController  = require('../controller/listController')

router.post("/createDish",listController.createDish)
router.post("/updateDish",listController.updateDish)
router.post("/listDish",listController.listDish)
router.post("/search",listController.search)


module.exports = router;