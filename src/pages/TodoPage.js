import React from "react";
import { Container } from 'react-bootstrap';
import Todo from "../components/Todo/Todo.js"

export default function TodoPage() {
    return (
        <div>
            <Container>
                <Todo />
            </Container>
        </div>
    );
}