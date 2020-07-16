const Etcs = require('../Model/Etcs')

const getAllService = (req, res) => {
    Etcs.find()
        .then(response => {
            res.status(200).json({
                msz: 'All Etcs',
                response
            })
        })
        .catch(err => {
            res.status(500).json({
                msz: 'Error',
                err
            })
        })
}

const postService = (req, res) => {
    let service = new Etcs({
        topTitle: req.body.topTitle,
        subTitle: req.body.subTitle,
        sumNumber: req.body.sumNumber,
        facebook: req.body.facebook,
        youtube: req.body.youtube,
        email: req.body.email,
        phone: req.body.phone,
        footerCredit: req.body.footerCredit
    })
    service.save()
        .then(response => {
            res.status(201).json({
                msz: 'Etcs Added',
                response: response
            })
        })
        .catch(err => {
            res.status(500).json({
                msz: 'Error',
                err
            })
        })
}

const getSingleService = (req, res) => {
    Etcs.findById(req.params.id)
        .then(response => {
            res.status(200).json({
                msz: 'Single ID',
                response: response
            })
        })
        .catch(err => {
            res.status(500).json({
                msz: 'Error',
                err
            })
        })
}

const deleteService = (req, res) => {
    Etcs.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).json({
                msz: 'Etcs Delete',
                response: response
            })
        })
        .catch(err => {
            res.status(500).json({
                msz: 'Error',
                err
            })
        })
}

const updateService = (req, res) => {
    let updateservice = {
        topTitle: req.body.topTitle,
        subTitle: req.body.subTitle,
        sumNumber: req.body.sumNumber,
        facebook: req.body.facebook,
        youtube: req.body.youtube,
        email: req.body.email,
        phone: req.body.phone,
        footerCredit: req.body.footerCredit
    }
    Etcs.findByIdAndUpdate(req.params.id, { set: updateservice })
        .then(service => {
            Etcs.findById(service._id)
                .then(response => {
                    res.status(200).json({
                        msz: 'Etcs Update',
                        response: response
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                msz: 'Error',
                err
            })
        })
}

module.exports = {
    getAllService,
    postService,
    getSingleService,
    deleteService,
    updateService
}