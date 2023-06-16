import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { artikel } from "../data";

const Artikel = () => {
    return (
        <div className="artikel min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center">Artikel Pilihan</h1>
                    </Col>
                </Row>
                <Row className="artikel-item">
                    {artikel.map((artikel_) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Col key={artikel_.id}>
                            <Card>
                                <Card.Img variant="top" src={artikel_.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{artikel_.title}</Card.Title>
                                    <Card.Text>
                                        {artikel_.des}
                                    </Card.Text>
                                    <Button variant="light" href={artikel_.link}>Selengkapnya</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Artikel