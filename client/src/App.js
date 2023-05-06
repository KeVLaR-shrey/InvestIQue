import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route
         element={<Home />}
         path="/"
         />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
