import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import Client from '../asset/user-panel/images/client/1.jpg'

class ClientReview extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <Fragment>
        <Container>
          <h4 className='allTitle'>CLIENT SAYS</h4>
          <Slider {...settings}>
            <Row>
              <Col>
                <img className='reviewImg' src={Client} alt='Client' />
                <h5>Web development</h5>
                <p>First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img className='reviewImg' src={Client} alt='Client' />
                <h5>Web development</h5>
                <p>First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img className='reviewImg' src={Client} alt='Client' />
                <h5>Web development</h5>
                <p>First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture.</p>
              </Col>
            </Row>
          </Slider>
        </Container>
      </Fragment>
    )
  }
}

export default ClientReview
