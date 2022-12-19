const List = require("../model/list");
class ListController {
  async createDish(req, res) {
    try {
      const { name, ingredients } = req.body;
      if (!name && !ingredients) {
        return res.status(400).json({ messsage: "All field required" });
      }
      const result = await List.create({ name, ingredients });
      res.status(200).json({ message: "Succesfully Created" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  async updateDish(req, res) {
    try {
      const { id,name, ingredients } = req.body;
      if (!name || !ingredients || !id) {
        return res.status(400).json({ messsage: "All field required" });
      }
      const result = await List.updateOne({_id: id}, {$set:{name,ingredients}})
      res.status(200).json({ message: "Succesfully Updated" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  async listDish(req, res) {
    try {
      let { pageNum = 1 } = req.body;
      let totalPage = await List.count();
      let result = await List.find()
        .skip(Number(pageNum) * 6 - 6)
        .limit(6);
      res.status(200).json({ result, totalPage: totalPage<=6?1:Math.ceil(totalPage / 6)});
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async search(req, res) {
    try {
      let { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: "Name Required" });
      }
      let result = await List.find({ name:{$regex:name,$options:"$i"} });
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = new ListController();
