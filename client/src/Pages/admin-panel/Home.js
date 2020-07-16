import React, { Fragment } from 'react'
import Navigation from '../components/Navigation'
import { Button } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import Axios from 'axios'
import Spinner from '../components/Spinner'
import WentWrong from '../components/Wentwrong'

class Etc extends React.Component {
    state = {
        contactdata: [],
        dataId: '',
        btnTxt: 'Delete',
        spinner: true,
        error: false
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/etcs/get')
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
        Axios.delete('http://localhost:5000/etcs/' + this.state.dataId)
            .then(result => {
                this.setState({
                    contactdata: this.state.contactdata.filter(el => el._id !== this.state.dataId),
                    btnTxt: 'Delete Success'
                })
            })
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

export default Etc