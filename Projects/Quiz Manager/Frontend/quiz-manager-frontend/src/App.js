import './App.css';
import {Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        {/* <Route path='/quiz' element={<Quiz/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;