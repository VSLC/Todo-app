import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import TodoPage from './pages/TodoPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
