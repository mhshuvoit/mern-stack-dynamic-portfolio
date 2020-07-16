import React, { Fragment } from 'react'
import Navigation from '../../components/admin-panel/Navigation'
import { Button } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import Axios from 'axios'
import Spinner from '../../components/admin-panel/Spinner'
import WentWrong from '../../components/admin-panel/Wentwrong'
import ApiEndPoint from '../../components/user-panel/ApiEndPoint'

class Projects extends React.Component {
    state = {
        contactdata: [],
        dataId: '',
        btnTxt: 'Delete',
        spinner: true,
        error: false
    }

    componentDidMount() {
        Axios.get(ApiEndPoint.baseurl + '/project/get')
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
        Axios.delete(ApiEndPoint.baseurl + '/project/' + this.state.dataId)
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

    render() {
        if (this.state.spinner === true) {
            return (
                <Navigation>
                    <Spinner />
                </Navigation>
            )
        } else if (this.state.error === true) {
            return <WentWrong />
        } else {
            const columns = [
                { dataField: 'img', text: 'Image', formatter: this.imgCellFormatte },
                { dataField: 'shortdes', text: 'Description' },
                { dataField: 'feature', text: 'Feature' }
            ]
            const selectRow = {
                mode: 'checkBox',
                onSelect: (row, isSelect, rowIndex) => {
                    this.setState({ dataId: row['_id'] })
                }
            }
            return (
                <Navigation>
                    <Fragment>
                        <Button
                            onClick={this.contactDelete} className='m-3'>{this.state.btnTxt}</Button>
                        <BootstrapTable
                            keyField='_id'
                            data={this.state.contactdata}
                            columns={columns}
                            pagination={paginationFactory()}
                            selectRow={selectRow} />
                    </Fragment>
                </Navigation>
            )
        }
    }
}

export default Projects