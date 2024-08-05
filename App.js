import {Route,Routes}from 'react-router-dom';
import './assets/CSS/Style.css'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';







function App(){
  return(
    <div className="App">
      <Header/>
       <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/Contact' element={<Contact/>}/>
       
      
       </Routes>
     
     <Footer/>
    
    
    </div>
  


  )



}
export default App;

   
