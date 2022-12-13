import { render, screen } from '@testing-library/react';
import Header from '../Header.js';

it("Should render the header Text", async () => {
    render(await <Header title="Text" />);
    const headingElement = screen.getByText(/Text/i);
    expect(headingElement).toBeInTheDocument();
})
