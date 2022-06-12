
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import M4 from './Pages/HomeCards/M4'
import Celestial from './Pages/HomeCards/Celestial'
import SR71 from './Pages/HomeCards/SR71'
import Luminous from './Pages/HomeCards/Luminous'
import './design.scss';
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <>
    
    
    
   
   <Router>
   
     <Routes>

     <Route path='/' element={<Home />} />
     <Route path='/m4' element={<M4 />} />
     <Route path='/sr71' element={<SR71 />} />
     <Route path='/celestial23' element={<Celestial />} />
     <Route path='/luminous66' element={<Luminous />} />
    
     
     
     
     </Routes>
   </Router>
   <br/> <br/> <br/>
   

   

   
   </>
  );
}

export default App;
