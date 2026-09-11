
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
    <ToastContainer position="bottom-right" toastClassName="!w-[380px] !min-h-[70px] !text-base font-bold p-4"/>
    </>
  )
}

export default App
