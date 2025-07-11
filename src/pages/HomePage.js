import React, { useState } from 'react'
import './HomePage.css'
import Sidebar from '../components/Sidebar'
import ChatComponent from '../components/ChatComponent'
import RightSideBar from '../components/RightSideBar'
function HomePage() {
const [selecteduser,setselecteduser] =useState(false)

  return (
    <div className='HomeMainDiv'>
<div className={!selecteduser ?'HomepageComponentdiv':'HomepageComponentdiv HomePageNotSelected'}>
    <Sidebar selecteduser={selecteduser} setselecteduser={setselecteduser}/>
    <ChatComponent selecteduser={selecteduser} setselecteduser={setselecteduser}/>
    <RightSideBar selecteduser={selecteduser} setselecteduser={setselecteduser} />
</div>
    </div>
  )
}

export default HomePage
