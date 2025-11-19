import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import LoginPage from "./pages/LoginPage"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  )
}

export default App
