import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"

const App = () => {
  return(
    <div>
<BrowserRouter>
<Routes>

<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

</Routes>
</BrowserRouter>
</div>
  )
}

export default App