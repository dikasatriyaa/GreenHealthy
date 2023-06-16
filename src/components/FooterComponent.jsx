import { Container, Row, Col} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'

const FooterComponent = () => {
    return (
        <footer>
            <Container>
                <Row >
                    <Col className='mt-4'>
                        <img src={Logo} alt="" width="250px" />

                    </Col>
                    <Col className='mt-4'>
                    <p className='mt-2 fs-8'>
                            Green Health merupakan pyung informasi mengenai Gaya Hidup Sehat dan ramah Lingkungan
                            </p>
                            </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterComponent;