import React, { useState } from 'react';

export function Form() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            setUsers([...users, { username, password, id: Date.now() }]);
            setUsername("");
            setPassword("");
        }
    };
    
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Add User</button>
            </form>
            
            <h4>User List:</h4>
            <ul>
                {users.map(user => (
                    <li  key={user.id}>
                        <strong>{user.username}</strong>
                        <button   onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}