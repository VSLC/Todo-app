import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput.js'

const mockedSetTodos = jest.fn();

it("Should test the placeholder text", async () => {
    render(await <AddInput todos={ []} setTodos = { mockedSetTodos } />);
    const placeholderElement = screen.getByPlaceholderText(/Adicione uma tarefa aqui.../i);
    expect(placeholderElement).toBeInTheDocument();
})

it("Should test if there's a change when typing in the AddInput ", async () => {
    render(await <AddInput todos={ []} setTodos = { mockedSetTodos } />);
    const placeholderElement = screen.getByPlaceholderText(/Adicione uma tarefa aqui.../i);
    fireEvent.change(placeholderElement, { target: { value: "Estudar" } });
    expect(placeholderElement.value).toBe("Estudar");
})
