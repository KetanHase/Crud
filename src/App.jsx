import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
 
import Edituser from './Edituser';
import UserList from './UserList';
 



const App = () => {
  return (
    <>
      <Router>

        <Navbar/>

        <Routes>

          

          <Route path='/' element={<Home/>} />
          <Route path='/userdata' element={<UserList />} />

          
          <Route path='/edituser/:id' element={<Edituser />} />



          {/* fallback routing */}
          <Route path='*' element={<Home />} />


        </Routes>



      </Router>


    </>
  )
}

export default App;