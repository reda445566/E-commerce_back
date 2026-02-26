const CategModel = require("../models/categ.model");
const slugify = require("slugify")

exports.getcateg = (req, res) => {


    res.send()
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








