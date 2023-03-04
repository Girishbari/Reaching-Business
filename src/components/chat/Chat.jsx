import React from 'react'
import './chat.css'
import {IoMdSend, IoMdAddCircle, IoMdArrowDropdown } from 'react-icons/io'
import { useState } from 'react'

const Chat = () => {
    
  const [show, setShow] = useState(false)
  const [showfollowers, setShowfollowers] = useState(false)
  const [users, getAllUsers] = useState([]);



  return (
    <div className='rb__chat'>
        <div className="rb__chat-section">
            <div className="rb__chat-header">
            <IoMdAddCircle size={55} cursor='pointer' onClick={() => setShowfollowers(prevstate => !prevstate)}/>
            {showfollowers && <> 
                <div className='rb__chat-header-group-1'>
                    <div className="rb__chat-header-group-1_child"></div>
                </div>
            </>}
            <div className='display'>
            <IoMdArrowDropdown  size={55} cursor='pointer' onClick={() => setShow(prevstate => !prevstate)}/>
            {show && <> 
                <div className='rb__chat-header-group-2'>

                </div>
            </>}
            </div>
            </div>
            <div className="rb__chat-body">
                <div className="rb_chat-body_content">
                    <div className='rb_chat-body_content-chatboxes'>zddsdsds</div>
                </div>
                <div className="rb_chat-body_input-box">
                <input type='text' placeholder='Type here'/>
                <IoMdSend />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat