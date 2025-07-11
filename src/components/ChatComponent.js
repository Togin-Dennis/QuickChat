import React, { useEffect, useRef } from 'react'
import './ChatComponent.css'
import assets, { messagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../lib/Utils'
function ChatComponent({selecteduser,setselecteduser}) {




const scrollend = useRef()

useEffect(
  ()=>
  {
 if(scrollend.current)
  scrollend.current.scrollIntoView({behavior : 'smooth'})
  },[]
)






  return selecteduser ? (
    <div className='chatcomponentmaindiv'>
<div className='chatprofilediv'>
<img src={assets.profile_martin} alt='' className='chatprofilepic'/>
<p className='chatname'>
  Martin Johnson
<span className='chatonlinestatus'></span>
</p>


<img onClick={()=>{
  setselecteduser(false)
}} src={assets.arrow_icon} alt='' className='chatinfopic'/>

<img src={assets.help_icon} className='chathelpic'/>
</div>


<div className='messageshow'>
{messagesDummyData.map((msg,index)=>(
<div key={index} className={`msgboxdiv ${msg.senderId !== '680f50e4f10f3cd28382ecf9' ? 'msgboxdivextra' : ''}`}>

{msg.image ? (
  <img src={msg.image} className='msgtext'/>
):(
  <p className={`msgtext ${msg.senderId !== '680f50e4f10f3cd28382ecf9' ? 'msgtxttrue' : 'msgtxtfalse'}`}>
    {msg.text}
  </p>
)

}
<div className='sendingdiv'>

<img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} style={{width:'1.75rem' , borderRadius:'100%'}}/>
<p style={{color: '#6b7280',
backgroundcolor: '#6b7280',
bordercolor: '#6b7280'}}>{formatMessageTime (msg.createdAt)}</p>
</div>

  </div>
))}

<div ref={scrollend}></div>
</div>


{/* bottom Area */}
<div className='botttomareamaindiv'>

<div className='sendinputwrapper'>
     <input type='text' placeholder='send a message' className='sendinputfield'/>
     <input type='file' id='image' accept='image/png,image/jpeg' hidden/>
     <label htmlFor='image'>
      <img src={assets.gallery_icon} style={{width:'1.25rem' ,marginRight:'0.5rem',cursor:'pointer'}}></img>
     </label>
</div>

<img src={assets.send_button} style={{width:'1.75rem' , cursor:'pointer'}}></img>
</div>

    </div>

  ):(

    <div className='noselectmaindiv'>
      
      <img src= {assets.logo_icon} className='Noselectedlogo'/>
      <p className='Noselectedltext'>Chat anywhere , anytime</p>
    </div>
  )
}

export default ChatComponent
