import { Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Register from './components/users/register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
