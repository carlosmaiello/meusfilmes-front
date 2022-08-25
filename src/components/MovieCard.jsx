import { Card, Col, Row } from "react-bootstrap";

export default function MovieCard({movie}) {
    if (!movie) return "";
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>{movie.title}</Col>
                    <Col sm={3}>{movie.year}</Col>
                </Row>
            </Card.Body>
        </Card>
    );
}