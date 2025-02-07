import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
        
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            loadUsers(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email} 
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
