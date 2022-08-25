import MovieCard from './MovieCard';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { Context } from '../contexts/MovieContext';

export default function MovieList() {
    const {movies, loadMovies} = useContext(Context);

    useEffect(() => {
        loadMovies();
    }, []);


    return (
        <Container>
            <h1>Filmes</h1>
            <Form className='my-4 bg-primary p-3 border-bottom rounded'>
                <Form.Group>
                    <Form.Control placeholder="Pesquisa" />
                </Form.Group>
            </Form>
            <Row>
                <Col className="d-grid gap-2">
                    {movies.map((movie) => (<MovieCard movie={movie} />))}
                </Col>
            </Row>
            <Row>
                <Col className="mt-3 d-grid gap-2">
                    <Button className="full-width" size="lg">Adicionar</Button>
                </Col>
            </Row>
        </Container>
    );
}