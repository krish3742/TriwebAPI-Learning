import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddSection from './components/AddSection';
import EditPage from './components/EditPage';

function App() {
  return (
    <div className="App-header">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/add' element={<AddSection />}></Route>
        <Route path='/edit' element={<EditPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
