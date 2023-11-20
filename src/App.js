import { Footer, Navbar } from "./component";
import { Home } from "./container";


function App() {
  return (
    <div className=" bg-yellow-500 ">
      <header className="">       
        <Navbar/>
        <Home/>
        <Footer/>
        
      </header>
    </div>
  );
}

export default App;
