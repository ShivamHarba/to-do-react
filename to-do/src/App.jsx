// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './Components/Home';
// import About from './components/About';
// import Contact from './Components/Contact';
// import NotFound from './Components/NotFound';
// import DetailInfo from './Components/DetailInfo';
// import Login from './Components/login';
import {Provider} from 'react-redux';
import store from './ReduxContainer/Store'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <Provider store={store}>
   <div className="h-screen bg-slate-500 dark:bg-golden"></div>
   </Provider>
   <Provider store={store}>
   <div className="h-screen bg-slate-500 dark:bg-golden"></div>
   </Provider>


   

   {/* <h1>HEllo THERE</h1> */}
   {/* <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/dashboard" element={<Home/>}></Route>
   </Routes>
   </BrowserRouter> */}
   
   
   </>
  )
}

export default App
