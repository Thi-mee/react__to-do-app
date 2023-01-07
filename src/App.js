import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoPage from './pages/ToDoPage';
import Home from './Components/Home';
import Archive from './Components/Archive';
import Trash from './Components/Trash';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ToDoPage/>} >
            <Route exact path="/archive" element={<Archive/>} />
            <Route exact path="/trash" element={<Trash/>} />
            <Route exact path="/" element={<Home/>} />
          </Route>
        </Routes>
    </Router>
  );}

export default App;
