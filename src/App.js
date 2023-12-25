import './App.css';
import Form from './components/Form';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
<Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Form />} />
        </Routes>
      </div>
</Router>

  );
}

export default App;
