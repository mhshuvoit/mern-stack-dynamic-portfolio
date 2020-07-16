import React, { Fragment } from 'react'
import wentWrongImg from "../asset/images/wentWrong.png"

const WentWrong = () => {
    return (
        <Fragment>
            <img style={{marginLeft:'375px', marginTop: '100px'}} src={wentWrongImg} alt='wentwrong' />
        </Fragment>
    )
}

export default WentWrong
