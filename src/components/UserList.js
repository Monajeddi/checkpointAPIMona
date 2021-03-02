import axios from 'axios'
import React, {useState , useEffect} from 'react'
import UserCard from './UserCard'

const UserList = () => {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => response.data)
        .then(resData => setUsers(resData))
        // .catch(error => console.log(`This is an error ${error}`));

    }

    useEffect(() => {
        getUsers() 
    }, [])

    return (
        <div className="list">
            <h1> List of users</h1>
           <ul>

               {users.map(user => (
                   

                       <p>
                      {user.username}
                       <br/>
                           {user.name}
                  <br/>
                      {user.email}
                  </p>
                   
                  
                      
               ))}

            {/* {users.map(user => 
                <UserCard user={user} key={user.id} />)}  */}
           
           </ul>
        </div>
    )
}

export default UserList
