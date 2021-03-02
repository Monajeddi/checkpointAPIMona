import React from 'react'
import {Card} from 'bootstrap-react'

const UserCard = ({user}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{user.id}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
    <Card.Text>
      {user.adress}
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard
