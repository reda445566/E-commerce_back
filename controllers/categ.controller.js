const CategModel = require("../models/categ.model");
const slugify = require("slugify")

//functions

exports.getcateg = async (req, res) => {
    const category = await CategModel.find({});

    res.status(200).json({
        results: category.length,
        category
    });
}
exports.createcateg = async (req,res) => {

try {

    const {name} = req.body;
  const category = await CategModel.create({name,slug:slugify(name)})
 res.status(201).json({
      success: true,
      data: category
    });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error"
        })
    }

}
