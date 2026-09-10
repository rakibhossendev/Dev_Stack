
import './App.css'
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/Hero';

function App() {

  

  return (
    <>

    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <ToastContainer/>
    </>
  )
}

export default App
