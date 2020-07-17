import React, { Fragment } from 'react'
import Navigation from '../../components/admin-panel/Navigation'
import { Button, Modal, Form } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import Axios from 'axios'
import Spinner from '../../components/admin-panel/Spinner'
import WentWrong from '../../components/admin-panel/Wentwrong'
import ApiEndPoint from '../../components/user-panel/ApiEndPoint'

class Services extends React.Component {
    state = {
        contactdata: [],
        dataId: '',
        btnTxt: 'Delete',
        spinner: true,
        error: false,
        show: false,
        title: '',
        img: '',
        des: ''
    }

    componentDidMount() {
        Axios.get(ApiEndPoint.baseurl + '/service/get')
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
        Axios.delete(ApiEndPoint.baseurl + '/service/' + this.state.dataId)
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
            <img className='w-100' src={cell} alt='img' />
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

    onSubmit = (event) => {
        event.preventDefault()
        let jsonservice = {
            title: this.state.title,
            img: this.state.img,
            des: this.state.des
        }
        Axios.post(ApiEndPoint.baseurl + '/service/add', jsonservice)
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
            img: '',
            des: '',
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
            return (
                <Navigation title='service'>
                    <WentWrong />
                </Navigation>
            )
        } else {
            const columns = [
                { dataField: 'img', text: 'Image', formatter: this.imgCellFormatte },
                { dataField: 'title', text: 'Title' },
                { dataField: 'des', text: 'des' }
            ]
            const selectRow = {
                mode: 'radio',
                onSelect: (row, isSelect, rowIndex) => {
                    this.setState({ dataId: row['_id'] })
                }
            }
            return (
                <Navigation title='service'>
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

                        <Modal scrollable={true} show={this.state.show} onHide={this.handleClose} className='text-justify'>
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
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Title"
                                        name="img"
                                        onChange={this.handleChange}
                                        value={this.state.img} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Description"
                                        name="des"
                                        onChange={this.handleChange}
                                        value={this.state.des} />
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

export default Services