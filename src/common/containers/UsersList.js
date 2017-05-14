import React from 'react'
import { connect } from 'react-redux'

const UsersList = props => {
  const { users, call } = props
  return (
    <div>
      {users.map((user, i) => <div key={i} onClick={call.bind(this, user.peerId)}>{user.peerId}</div>)}
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.users.records
})

export default connect(mapStateToProps)(UsersList)
