import React from 'react'
import Messaging from '../components/Messaging'
import Header from '../components/home/Header'

const MessagesPage = ({ username }) => {
    

  return (
    <div className='message-box'>
      <Header username={username}/>
      <Messaging username={username} />
    </div>
  )
}

export default MessagesPage