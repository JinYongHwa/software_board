var express = require('express');
var router = express.Router();

router.post("/board/write", async function (req, res) {
  var board = req.body
  var createdBoard = await sequelize.models.board.create(board)
  res.json(createdBoard)

})
router.get("/board/:no", async function (req, res) {
  var no = req.params.no
  var board = await sequelize.models.board.findByPk(no)
  res.json(board)
})


module.exports = router;
