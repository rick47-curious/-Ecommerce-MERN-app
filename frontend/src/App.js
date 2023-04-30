import './App.css';

import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Homepage } from './pages/Homepage';
import { LoginSection } from './pages/LoginSection';
import { CartPage } from './pages/CartPage';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/authorize" element={<LoginSection/>}/>
            <Route path='/cart' element={<CartPage/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
