const Courses = require('../Model/Courses')

const getAllService = (req, res) => {
    Courses.find()
        .then(response => {
            res.status(200).json({
                msz: 'All Courses',
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
    let service = new Courses({
        image: req.file.path,
        title: req.body.title,
        shortdes: req.body.shortdes,
        feature: req.body.feature
    })
    service.save()
        .then(response => {
            res.status(201).json({
                msz: 'Courses Added',
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
    Courses.findById(req.params.id)
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
    Courses.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).json({
                msz: 'Courses Delete',
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
        image: req.file.path,
        title: req.body.title,
        shortdes: req.body.shortdes,
        feature: req.body.feature
    }
    Courses.findByIdAndUpdate(req.params.id, { set: updateservice })
        .then(service => {
            Courses.findById(service._id)
                .then(response => {
                    res.status(200).json({
                        msz: 'Courses Update',
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