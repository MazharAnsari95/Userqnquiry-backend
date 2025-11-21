const enquiryModel = require("../../modules/enquiry.model");

let enquiryInsert = async (req, res) => {
    try {
        let { sName, email, sPhone, sMessage } = req.body;


        if (!sName || !email || !sPhone || !sMessage) {
            return res.status(400).json({
                status: 1,
                message: "All fields  required"
            });
        }

        let enquiry = await enquiryModel.create({
            sName,
            email,
            sPhone,
            sMessage
        });

        res.status(201).json({
            status: 1,
            message: "Enquiry saved successfully",
            data: enquiry
        });

    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({
                status: 0,
                message: "Email already exists",
                error: err
            });
        }

        res.status(400).json({
            status: 0,
            message: "Error while saving enquiry",
            error: err
        });
    }
};
let enquiryList = async (req, res) => {
    let enquiry = await enquiryModel.find();
    res.send({ status: 1, enquiryList: enquiry });

}
let enquiryDelete = async (req, res) => {
    let enId = req.params.id;
    let enquiry = await enquiryModel.deleteOne({ _id: enId });
    res.send({ status: 1, message: "Enquiry deleted successfully", enquiryList: enquiry });

}

let enquirysingleRow = async (req, res) => {
    let enId = req.params.id;
    let enquiry = await enquiryModel.findOne({ _id: enId });
    res.send({ status: 1, enquiry });
}
let enquiryupdate = async (req, res) => {
    let enquiryId = req.params.id;
    let { sName, email, sPhone, sMessage } = req.body;
    let updateObj = {
        sName,
        email,
        sPhone,
        sMessage
    };
    let updateRes=await enquiryModel.updateOne({_id:enquiryId},updateObj);
    res.send



}
module.exports = { enquiryInsert, enquiryList, enquiryDelete, enquirysingleRow, enquiryupdate };
