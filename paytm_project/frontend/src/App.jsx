import { useState } from 'react'
import { Route,Routes,BrowserRouter} from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Dashboard} from './pages/Dashboard'
import {SendMoney} from './pages/Send'
import { RecoilRoot } from 'recoil'
function App() {
  return<>
  <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send" element={<SendMoney/>} />
    </Routes>
  </BrowserRouter>
 </RecoilRoot>
</>
}

export default App
