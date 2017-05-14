import React from 'react'

const Message = props => {
  const { m, t, n } = props

  return (
    <div className='chat-message' style={{
      background: 'skyBlue',
      borderRadius: 6,
      marginBottom: 7,
      padding: 14
    }}>
      <h5>{n}</h5>
      <small><time>{t}</time></small>
      <p style={{ color: 'black' }}>{m}</p>
    </div>
  )
}

export default Message
