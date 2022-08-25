import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Context } from "../contexts/MovieContext";

export default function MovieForm() {
    const { createMovie } = useContext(Context);

    const [title, setTitle] = useState();
    const [year, setYear] = useState();

    const submit = (event) => {
        event.preventDefault();

        createMovie({
            title,
            year
        })

    }

    return (
        <Form className='d-grid gap-2' onSubmit={submit}>
            <Form.Group>
                <Form.Control placeholder="Título" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Control placeholder="Ano" value={year}
                    onChange={(e) => setYear(e.target.value)} />
            </Form.Group>
            <div className="mt-3 d-grid gap-2">
                <Button type="submit">Adicionar</Button>
            </div>
        </Form>
    );
}