import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer';
// import { Card } from './Components/Card';
import { Cards } from './Components/Cards';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
