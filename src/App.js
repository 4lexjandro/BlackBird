import Bar from './Parts/Bar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import './design.scss';
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <>
    
    
    
   
   <Router>
   
     <Routes>

     <Route path='/' element={<Home />} />
     <Route path='/home' element={<Home />} />
    
     
     
     
     </Routes>
   </Router>
   <br/> <br/> <br/>
   <h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1>
   <h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1>
   <h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1>
   <h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1>
   <h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1><h1>home page here</h1>


   

   
   </>
  );
}

export default App;
