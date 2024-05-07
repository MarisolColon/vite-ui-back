import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../../img/image.jpeg';

import Header from "../layout/Header"
import Footer from "../layout/Footer"

export default function Layout() {
    return (<>
        <Header />
        <Container>
            <Row>
                <Col>
                    <Outlet />
                </Col>
            </Row>
            <Carousel>
                <Carousel.Item>
                    {/* <div style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '500px' }} text="First slide" ></div> */}
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '500px' }} text="First slide" ></div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '500px' }} text="First slide" ></div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
        <Footer />
    </>)
}