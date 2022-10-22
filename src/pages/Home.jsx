
import React from 'react'

import Navbar from '../compononents/Navbar'
import Announcement from '../compononents/Announcement'
import Slider from '../compononents/Slider'
export const Home = () => {
  return (
    <div>
    <Announcement/>
     <Navbar/>
     <Slider />
     </div>
  )
}
export default Home