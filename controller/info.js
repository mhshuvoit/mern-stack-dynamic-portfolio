const Info = require('../Model/Info')

const getAllService = (req, res) => {
    Info.find()
        .then(response => {
            res.status(200).json({
                msz: 'All Info',
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
    let service = new Info({
        about: req.body.about,
        refund: req.body.refund,
        terms: req.body.terms,
        privacy: req.body.privacy
    })
    service.save()
        .then(response => {
            res.status(201).json({
                msz: 'Info Added',
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
    Info.findById(req.params.id)
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
    Info.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).json({
                msz: 'Info Delete',
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
        about: req.body.about,
        refund: req.body.refund,
        terms: req.body.terms,
        privacy: req.body.privacy
    }
    Info.findByIdAndUpdate(req.params.id, { set: updateservice })
        .then(service => {
            Service.findById(service._id)
                .then(response => {
                    res.status(200).json({
                        msz: 'Info Update',
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