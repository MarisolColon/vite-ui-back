import {
    MDBBtn
  } from 'mdb-react-ui-kit';

const About = () => {
    return (
        <div
        className='text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '500px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '500px'  }}>
          <div>
            <div className='text-white'>
              <MDBBtn tag="a" outline size="lg">
                Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About