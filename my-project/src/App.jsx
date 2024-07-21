import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import HeaderLayout from './layoutes/HeaderLayout';
import FooterLayouts from './layoutes/FooterLayouts';
function App() {

  return (
    <>

      <Router>
        <HeaderLayout />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <FooterLayouts />
      </Router>
    </>
  )
}

export default App
