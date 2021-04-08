import React, { Fragment } from 'react'
import Navigation from '../../components/admin-panel/Navigation'
import { Button, Modal, Form } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import Axios from 'axios'
import Spinner from '../../components/admin-panel/Spinner'
import WentWrong from '../../components/admin-panel/Wentwrong'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

class Courses extends React.Component {
    state = {
        contactdata: [],
        dataId: '',
        btnTxt: 'Delete',
        spinner: true,
        error: false,
        show: false,
        title: '',
        image: null,
        shortdes: '',
        feature: ''
    }

    componentDidMount() {
        Axios.get('/course/get')
            .then(result => {
                if (result === null) {
                    this.setState({
                        error: true,
                        spinner: false
                    })
                }
                this.setState({
                    contactdata: result.data.response,
                    spinner: false
                })
            })
            .catch(error => {
                this.setState({
                    error: true,
                    spinner: false
                })
            })
    }

    contactDelete = () => {
        Axios.delete('/course/' + this.state.dataId)
            .then(result => {
                this.setState({
                    contactdata: this.state.contactdata.filter(el => el._id !== this.state.dataId),
                    btnTxt: 'Delete Success'
                })
            })
            .catch(err => {
                this.setState({
                    btnTxt: 'Delete Unsuccess'
                })
            })
    }

    imgCellFormatte(cell, row) {
        return (
            <img className='w-50' src={'/' + cell} alt='#' />
        )
    }

    handleOpen = () => {
        this.setState({ show: true })
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChangeImg = (event) => {
        this.setState({ image: event.target.files[0] })
    }

    handleFeaChange = (content, delta, source, editor) => {
        this.setState({ feature: editor.getHTML() })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const fd = new FormData()
        fd.append('title', this.state.title)
        fd.append('shortdes', this.state.shortdes)
        fd.append('feature', this.state.feature)
        fd.append('image', this.state.image)
        Axios.post('/course/add', fd, {
            onUploadProgress: ProgressEvent => {
                console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
            }
        })
            .then(result => {
                this.handleClose()
                this.componentDidMount()
            })
            .catch(err => {
                console.log(err)
            })
        event.target.reset()
        this.setState({
            title: '',
            image: '',
            shortdes: '',
            feature: ''
        })
    }

    render() {
        if (this.state.spinner === true) {
            return (
                <Navigation title="loding...">
                    <Spinner />
                </Navigation>
            )
        } else if (this.state.error === true) {
            return <WentWrong />
        } else {
            const columns = [
                { dataField: 'image', text: 'Image', formatter: this.imgCellFormatte },
                { dataField: 'title', text: 'Title' },
                { dataField: 'shortdes', text: 'Description' },
                { dataField: 'feature', text: 'Feature' }
            ]
            const selectRow = {
                mode: 'radio',
                onSelect: (row, isSelect, rowIndex) => {
                    this.setState({ dataId: row['_id'] })
                }
            }

            return (
                <Navigation title="Courses">
                    <Fragment>
                        <Button
                            onClick={this.contactDelete}
                            className='m-3 btn-danger'>
                            {this.state.btnTxt}
                        </Button>
                        <Button
                            onClick={this.handleOpen}
                            className='m-3 btn-primary'>
                            Add New
                        </Button>
                        <BootstrapTable
                            keyField='_id'
                            data={this.state.contactdata}
                            columns={columns}
                            pagination={paginationFactory()}
                            selectRow={selectRow} />
                        <Modal scrollable={true} size="lg" show={this.state.show} onHide={this.handleClose} className='text-justify'>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Course</Modal.Title>
                            </Modal.Header>
                            <Form onSubmit={this.onSubmit} style={{ margin: '5px 25px' }}>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Title"
                                        name="title"
                                        onChange={this.handleChange}
                                        value={this.state.title} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Description"
                                        name="shortdes"
                                        onChange={this.handleChange}
                                        value={this.state.shortdes} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Feature</Form.Label>
                                    <ReactQuill
                                        theme="snow"
                                        name="feature"
                                        onChange={this.handleFeaChange}
                                        value={this.state.feature}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        style={{ display: 'none' }}
                                        type="file"
                                        onChange={this.handleChangeImg}
                                        ref={fileInput => this.fileInput = fileInput} />
                                    <p className="pStyle" onClick={() => this.fileInput.click()}>Pick File</p>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal>
                    </Fragment>
                </Navigation>
            )
        }
    }
}

export default Courses