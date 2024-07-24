import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Profile from './pages/Profile'

const App = () => {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  </Router>
}

export default App