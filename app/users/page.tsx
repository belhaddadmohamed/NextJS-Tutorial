import React from 'react'

interface User {
    // Type any attribute you want here of the api response
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    // {next: {revalidate: 10}} // Revalidate api every 10 seconds
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});   // Cache is disabled
    const users: User[] = await res.json();

  return (
    <div>
        <h1>UsersPage</h1>
        <p>{new Date().toLocaleTimeString()}</p>    {/* This is a test to see how the api will performs */}
        <hr />

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => 
                    <tr key={user.id}>
                        <th>{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default UsersPage