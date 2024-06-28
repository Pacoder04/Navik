import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import Home from './Home';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

       
       
    </div>
  );
}

export default App;
