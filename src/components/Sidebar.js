import React, { use } from 'react'
import './SideBar.css'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
function Sidebar({selecteduser,setselecteduser}) {
    const navigate=useNavigate()
  return (
    <div className='Sidebarmaindiv'>
     <div className='Sidebardiv'>
        <div className='sidebarheader'>
 <img src={assets.logo} alt='Logo' className='logoimage'></img>
 <div className='MenuDiv'>
 <img src={assets.menu_icon} alt='Menu' className='Menuimage'></img>
 <div className='Menubuttons'>
    <p onClick={()=>{navigate('/profile')}} className='Menubutton'>Edit Profile</p>
    <hr className='horizontalline' />
    <p className='Menubutton'>Log Out</p>
 </div>
 </div>
        </div>

<div className='Searchdiv'>
    <img src={assets.search_icon} alt="Search" className='Searchimage' />
    <input type='text' className='Seachinput' placeholder='Search User'/>
</div>


     </div>


<div className='Chatlist'>
    

    {userDummyData.map((user,index)=>
    {
        return <div 
        onClick={()=>{setselecteduser(user)}}
        key={index}
        className={`Chatlistbox ${selecteduser?._id ===  user._id && 'ChatlistboxSlected' }`}>


  <img src={user?.profilePic || assets.avatar_icon} alt="profilePic" className='chatprofiles'/>
<div className='chatlistnameandstatus'>  

<p>{user.fullName}</p>
{
    index < 3?
    <span className='onlinestatus'>Online</span>:
     <span className='onlinestatus offlinestatus'>Offline</span>
}
    </div>

{
    index > 2&&
    <p className='unseenchat'>{index}</p>
}


        </div>
    })}
</div>


    </div>
  )
}

export default Sidebar
