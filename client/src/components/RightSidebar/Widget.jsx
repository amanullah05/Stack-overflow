import React from 'react'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import stackoverflow from '../../assets/stack-overflow.svg'
function Widget() {
  return (
    <div className='widget'>
      <h4>The overflow blog</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" width={18} />
        <p>Observability is key to the future of the software(and your DevOps career)</p>
      </div>
      <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" width={18} />
        <p>Podcast 374: How valuable is your screeb name?</p>
      </div>
      </div>
      
      <h4>Feature on Meta</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={comment} alt="pen" width={18} />
        <p>Review queue workfloes - fical relaease...</p>
      </div>
      <div className='right-sidebar-div-2'>
        <img src={comment} alt="pen" width={18} />
        <p>Please welcome Valued Associate: #985 -V2Blst #959 -SpencerG</p>
      </div>
       <div className='right-sidebar-div-2'>
        <img src={stackoverflow} alt="pen" width={18} />
        <p>Outdated Answers:accepted answer is now unpinned on Stack Overflow</p>
      </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <p>38</p>
        <p>Why was this spam flag declined, yet the question marked as spam?</p>
      </div>
      <div className='right-sidebar-div-2'>
        <p>20</p>
        <p>What is the best course of action when a user has high enough rep to...</p>
      </div>
      <div className='right-sidebar-div-2'>
       <p>14</p>
        <p> Is a link to the "How to ask" help page a useful comment?</p>
      </div>
      </div>
    </div>
  )
}

export default Widget
