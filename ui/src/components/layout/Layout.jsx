import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
    MDBBtn
  } from 'mdb-react-ui-kit';

import Header from "../layout/Header"
import Footer from "../layout/Footer"

export default function Layout() {
    return (<>
        <Header />
        <Container>
            <Row>
                <Col>
                    <Outlet />
                    <div 
                id='intro-example'
                className='text-center bg-image'
                style={{ backgroundImage: `url('https://mdbootstrap.com/img/new/slides/041.webp')`,
                        height: '500px',
                        backgroundRepeat: 'no-repeat'
                    }}
            >
                {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '500px'}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Learn React</h1>
                            <h5 className='mb-4'>Exercise to learn back and front! </h5>
                            <MDBBtn
                                className="m-2"
                                tag="a"
                                outline
                                size="lg"
                                rel="nofollow"
                                target="_blank"
                                href='https://github.com/MarisolColon/vite-ui-back'
                            >
                                GitHub
                            </MDBBtn>
                            <MDBBtn
                                className="m-2"
                                tag="a"
                                outline
                                size="lg"
                                target="_blank"
                                href='/about'
                            >
                               Testing
                            </MDBBtn>
                        </div>
                    </div>
                </div> */}
            </div>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>)
}