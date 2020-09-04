import React, { Fragment } from 'react'
import Navigation from '../../components/admin-panel/Navigation'
import { Button, Modal, Form } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import Axios from 'axios'
import Spinner from '../../components/admin-panel/Spinner'
import WentWrong from '../../components/admin-panel/Wentwrong'

class Etc extends React.Component {
    state = {
        contactdata: [],
        dataId: '',
        btnTxt: 'Delete',
        spinner: true,
        error: false,
        show: false,
        topTitle: '',
        subTitle: '',
        sumNumber: '',
        facebook: '',
        youtube: '',
        email: '',
        phone: '',
        footerCredit: ''
    }

    componentDidMount() {
        Axios.get('/etcs/get')
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
        Axios.delete('/etcs/' + this.state.dataId)
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
        let jsonHome = {
            topTitle: this.state.topTitle,
            subTitle: this.state.subTitle,
            sumNumber: this.state.sumNumber,
            facebook: this.state.facebook,
            youtube: this.state.youtube,
            email: this.state.email,
            phone: this.state.phone,
            footerCredit: this.state.footerCredit
        }
        Axios.post('/etcs/add', jsonHome)
            .then(result => {
                console.log(result.data)
            })
            .catch(err => {
                console.log(err)
            })
        event.target.reset()
        this.setState({
            topTitle: '',
            subTitle: '',
            sumNumber: '',
            youtube: '',
            facebook: '',
            email: '',
            phone: '',
            footerCredit: ''
        })
    }

    render() {
        console.log(this.state);
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
                { dataField: 'topTitle', text: 'Top-Title' },
                { dataField: 'subTitle', text: 'Sub-Title' },
                { dataField: 'sumNumber', text: 'Sum-Number' },
                { dataField: 'facebook', text: 'Fb-Url' },
                { dataField: 'youtube', text: 'Youtube-Url' },
                { dataField: 'email', text: 'Email' },
                { dataField: 'phone', text: 'Phone' },
                { dataField: 'footerCredit', text: 'FooterCredit' },
            ]
            const selectRow = {
                mode: 'radio',
                onSelect: (row, isSelect, rowIndex) => {
                    this.setState({ dataId: row['_id'] })
                }
            }
            return (
                <Navigation title="Home">
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
                                <Modal.Title>Add Etc</Modal.Title>
                            </Modal.Header>
                            <Form onSubmit={this.onSubmit} style={{ margin: '5px 25px' }}>
                                <Form.Group>
                                    <Form.Label>Top Title</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Top Title"
                                        name="topTitle"
                                        onChange={this.handleChange}
                                        value={this.state.topTitle} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Sub Title</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Sub Title"
                                        name="subTitle"
                                        onChange={this.handleChange}
                                        value={this.state.subTitle} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Sum-Number</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Sum-Number"
                                        name="sumNumber"
                                        onChange={this.handleChange}
                                        value={this.state.sumNumber} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Youtube-Url"
                                        name="facebook"
                                        onChange={this.handleChange}
                                        value={this.state.facebook} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Youtube-Url</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Youtube-Url"
                                        name="youtube"
                                        onChange={this.handleChange}
                                        value={this.state.youtube} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Email"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.email} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter Phone"
                                        name="phone"
                                        onChange={this.handleChange}
                                        value={this.state.phone} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>FooterCredit</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter FooterCredit"
                                        name="footerCredit"
                                        onChange={this.handleChange}
                                        value={this.state.footerCredit} />
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

export default Etc