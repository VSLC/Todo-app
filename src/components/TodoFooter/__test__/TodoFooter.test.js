import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';

it("Should render the paragraph footer text with 5 tasks", async () => {
    render(<TodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tarefas restantes/i);
    expect(paragraphElement).toBeInTheDocument();
})

it("Should render the paragraph footer text with 1 task", async () => {
    render(<TodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 tarefa restante/i);
    expect(paragraphElement).toBeInTheDocument();
})
