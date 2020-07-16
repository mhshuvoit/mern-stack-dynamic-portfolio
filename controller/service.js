const Service = require('../Model/Service')

const getAllService = (req, res) => {
    Service.find()
        .then(response => {
            res.status(200).json({
                msz: 'All Service',
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
    let service = new Service({
        img: req.body.img,
        title: req.body.title,
        des: req.body.des
    })
    service.save()
        .then(response => {
            res.status(201).json({
                msz: 'Service Added',
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
    Service.findById(req.params.id)
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
    Service.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).json({
                msz: 'Service Delete',
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
        img: req.body.img,
        title: req.body.title,
        des: req.body.des
    }
    Service.findByIdAndUpdate(req.params.id, { set: updateservice })
        .then(service => {
            Service.findById(service._id)
                .then(response => {
                    res.status(200).json({
                        msz: 'Service Update',
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