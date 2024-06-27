import Owner from './pages/Owner';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import OuterLayout from './components/layout/OuterLayout';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [owner, setOwner] = useState("Kshitij");
  const newOwner = () => {
    owner === "Kshitij" ? setOwner("Krish") : setOwner("Kshitij");
  }
  return (
    <OuterLayout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/owner' element={<Owner owner={owner} newOwner={newOwner}/>}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/add' element={<AddProduct />}></Route>
      </Routes>
    </OuterLayout>
  );
}

export default App;
