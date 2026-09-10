
import './App.css'
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/Hero';
import TechnologiesHome from './components/Technologies/TechnologiesHome';

function App() {

  

  return (
    <>

    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <TechnologiesHome/>
    <ToastContainer/>
    </>
  )
}

export default App
