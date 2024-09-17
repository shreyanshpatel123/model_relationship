import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./home"
import Insert from "./insert"
import Display from "./display"

const App=()=>{
    return(<>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>} >
     <Route  index  element={<Home/>}/>
     <Route path="home" element={<Home/>}/>
     <Route path="insert" element={<Insert/>}/>
     <Route path="display" element={<Display/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
    
    </>)
}
export default  App

