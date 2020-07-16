const Contact = require('../Model/Contact')

const getAllService = (req, res) => {
    Contact.find()
        .then(response => {
            res.status(200).json({
                msz: 'All Contact',
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
    let service = new Contact({
        name: req.body.name,
        email: req.body.email,
        msg: req.body.msg
    })
    service.save()
        .then(response => {
            res.status(201).json({
                msz: 'Contact Added',
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
    Contact.findById(req.params.id)
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
    Contact.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).json({
                msz: 'Contact Delete',
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
        name: req.body.name,
        email: req.body.email,
        msg: req.body.msg
    }
    Contact.findByIdAndUpdate(req.params.id, { set: updateservice })
        .then(service => {
            Contact.findById(service._id)
                .then(response => {
                    res.status(200).json({
                        msz: 'Contact Update',
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