import { Container, Row, Col, Card } from "react-bootstrap";
import Andika from '../assets/img/dika.jpg'
import Adian from '../assets/img/Adian.jpeg'
import Silvanus from '../assets/img/silvanus.jpg'
import Marsya from '../assets/img/marsya.jpg'

const TeaamPage = () => {
    return (
        <div className="min-vh-100">
            <Container>
                <Row>
                    <Col className="team text-center">
                    <h1>Bertemu dengan Team Kami</h1>
                    <p>
                    Misi kami adalah membangun perubahan yang berkelanjutan dalam gaya hidup sehat dan ramah lingkungan, dengan tujuan menciptakan dunia yang lebih baik bagi generasi mendatang. Kami berkomitmen untuk menginspirasi dan memberdayakan masyarakat untuk mengadopsi praktik-praktik sehat dan bertanggung jawab terhadap lingkungan. Melalui edukasi, kolaborasi, dan inovasi, kami bertujuan untuk menciptakan kesadaran akan pentingnya kesehatan pribadi dan keberlanjutan lingkungan. <br /></p>
                    </Col>
                </Row>
                <Row className="our-team artikel-item">
                            <Col className="shadow_rounded">
                            <Card>
                                <Card.Img variant="top" src={Andika} />
                                <Card.Body>
                                    <Card.Title className="text-center">Muhamad Andika Try Satria</Card.Title>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col className="shadow_rounded">
                            <Card>
                                <Card.Img variant="top" src={Adian} />
                                <Card.Body>
                                    <Card.Title className="text-center">Adian Ali Pratama</Card.Title>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col className="shadow_rounded">
                            <Card>
                                <Card.Img variant="top" src={Silvanus} />
                                <Card.Body>
                                    <Card.Title className="text-center">Silvanus Prihantono</Card.Title>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col className="shadow_rounded">
                            <Card>
                                <Card.Img variant="top" src={Marsya} />
                                <Card.Body>
                                    <Card.Title className="text-center">Marsya Farras Nabillah</Card.Title>
                                </Card.Body>
                            </Card>
                            </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TeaamPage;