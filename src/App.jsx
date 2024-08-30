import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";

import HerosectionHome from './assets/Pages/HerosectionHome';

function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<HerosectionHome/>} />

    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App