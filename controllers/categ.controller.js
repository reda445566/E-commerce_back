const CategModel = require("../models/categ.model");
const slugify = require("slugify")

//functions

exports.getcateg = async (req, res) => {
  try {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;

    const category = await CategModel.find({})
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      results: category.length,
      page,
      data: category
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// getcategbyid
exports.getcategbyid = async (req,res)=>{

    try{

        const {id} = req.params
        const categid = await CategModel.findById(id);
        if(!categid){

            res.status(404).send({msg:"no categ"});
        }
        res.status(200).send({date:categid});


    }catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}



// createcateg
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



