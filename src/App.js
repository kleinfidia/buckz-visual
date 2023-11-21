import { Footer, Navbar } from "./component";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Blog, Galleries, Home, Testimonials, Videos } from "./container";


function App() {
  return (
    <BrowserRouter>
    <div className=" bg-yellow-500 ">
      <header className="">       
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/About" Component={About}/>
          <Route path="/Videos" Component={Videos}/>
          <Route path="/Testimonials" Component={Testimonials}/>
          <Route path="/Blog" Component={Blog}/>
          <Route path="/Galleries" Component={Galleries}/>

        </Routes>
        
        <Footer/>
        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
