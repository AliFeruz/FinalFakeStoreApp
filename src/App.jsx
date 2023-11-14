import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ManProducts from "./pages/ManProducts";
import WomanProducts from "./pages/WomenProducts"
import JeweleryProducts from "./pages/Jewelery";
import ElectronicProducts from "./pages/Electronics";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./components/Login";
import RegistrationPage from "./pages/RegistrationPage"


function App() {
const [themeMode, setThemeMode] = useState('light')

const darkTheme = () => {
  setThemeMode('dark')
}
const lightTheme = () => {
  setThemeMode('light')
}
useEffect(() => {
  document.querySelector('html').classList.remove('dark', 'light')
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (

    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <Nav/> 
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/manproducts" 
    element={<ManProducts/>}/>
    <Route path="/womanproducts" 
    element={<WomanProducts/>}/>
    <Route path="/jewelery"
    element={<JeweleryProducts/>}/>
    <Route path="/electronicproducts"
    element={<ElectronicProducts/>}/>
    <Route path="/profile"
    element={<Profile/>}/>
    <Route path="/login"
    element={<Login/>}/>
    <Route path="/register"
    element={<RegistrationPage/>}></Route>
  </Routes>
  <Footer/>
    </ThemeProvider>
  
  );
  }


export default App;
