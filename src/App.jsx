import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>


  );
}

export default App;