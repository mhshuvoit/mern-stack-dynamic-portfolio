const fs = require('fs');
const Project = require('../Model/Project')

const getAllService = (req, res) => {
    Project.find()
        .then(response => {
            res.status(200).json({
                msz: 'All Project',
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
    let service = new Project({
        image: req.file.path,
        title: req.body.title,
        shortdes: req.body.shortdes,
        feature: req.body.feature
    })
    service.save()
        .then(response => {
            res.status(201).json({
                msz: 'Project Added',
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
    Project.findById(req.params.id)
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
    Project.findOne({ _id: req.params.id })
        .then(respons => {
            Project.findByIdAndRemove(respons.id)
                .then(response => {
                    res.status(200).json({
                        msz: 'Project Delete',
                        response: response
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        msz: 'Error',
                        err
                    })
                })
            fs.unlink('./' + respons.image, function (err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Delete')
                }
            })
        })

}

const updateService = (req, res) => {
    let updateservice = {
        img: req.body.img,
        title: req.body.title,
        shortdes: req.body.shortdes,
        feature: req.body.feature
    }
    Project.findByIdAndUpdate(req.params.id, { set: updateservice })
        .then(service => {
            Project.findById(service._id)
                .then(response => {
                    res.status(200).json({
                        msz: 'Project Update',
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