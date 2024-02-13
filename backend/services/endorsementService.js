const Endorsement = require('../models/Endorsement');
const EndorsementStatus = require('../models/EndorsementStatus');
const sendEmail = require("./EmailService");

async function getAllEndorsements(res) {
    try {
        const endorsements = (await Endorsement.find().exec()).filter(endorsement => endorsement.status === EndorsementStatus.APPROVED)
        res.json(endorsements);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function addEndorsement(req, res){
    try {
        console.log(req.body); // Log the request body

        req.body.status = EndorsementStatus.PENDING;
        const endorsement = new Endorsement(req.body);
        const newEndorsement = await endorsement.save();


        let context = {
            name: endorsement.name,
            email: endorsement.email,
            comment: endorsement.comment,
            date: endorsement.date,
            approveLink: process.env.BACKEND_URL + '/api/v1/services/endorsementService/' + endorsement._id + '/approve',
            rejectLink: process.env.BACKEND_URL + '/api/v1/services/endorsementService/' + endorsement._id + '/reject'
        }

        await sendEmail('', 'richard2004danon@gmail.com', 'New Endorsement for portfolio!', 'confirmRecommendation', context).catch(
            (err) => {
                console.log(err)
                res.status(422).json({message: 'error sending email'})
            });

        res.status(201).json(newEndorsement);
    } catch (err) {
        console.error(err); // Log any errors
        res.status(400).json({message: err.message});
    }
}

async function approveEndorsement(req, res) {
    try {
        const endorsement = await Endorsement.findById(req.params.id);
        endorsement.status = EndorsementStatus.APPROVED;
        const updatedEndorsement = await endorsement.save();
        res.status(200).json(updatedEndorsement);
    }catch (err){
        res.status(400).json({ message: err.message });
    }
}
async function rejectEndorsement(req, res){
    try{
        const endorsement = await Endorsement.findById(req.params.id);
        endorsement.status = EndorsementStatus.REJECTED;
        const updatedEndorsement = await endorsement.save();
        res.status(200).json(updatedEndorsement);
    }catch (err){
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAllEndorsements,
    addEndorsement,
    approveEndorsement,
    rejectEndorsement
};

