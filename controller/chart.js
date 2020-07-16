const Chart = require('../Model/Chart')

const getAllService = (req, res) => {
    Chart.find()
        .then(response => {
            res.status(200).json({
                msz: 'All Chart',
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
    let service = new Chart({
        technology: req.body.technology,
        project: req.body.project,
        techDes: req.body.techDes
    })
    service.save()
        .then(response => {
            res.status(201).json({
                msz: 'Chart Added',
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
    Chart.findById(req.params.id)
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
    Chart.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).json({
                msz: 'Chart Delete',
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
        technology: req.body.technology,
        project: req.body.project,
        techDes: req.body.techDes
    }
    Chart.findByIdAndUpdate(req.params.id, { set: updateservice })
        .then(service => {
            Chart.findById(service._id)
                .then(response => {
                    res.status(200).json({
                        msz: 'Chart Update',
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