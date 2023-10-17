import React, { useEffect, useParams, useState } from "react";


function UserProfile() {
    const users = [
        { id: 1, name: "John", email: "john@example.com" },
        { id: 2, name: "Jane", email: "jane@example.com" },
        { id: 3, name: "Joe", email: "joe@example.com" },
        { id: 4, name: "Jill", email: "jill@example.com" },
        { id: 5, name: "Jack", email: "jack@example.com" }
    ]

    // const { userId } = useParams();
    const userId = 3;
    const [user, getUser] = useState({});
    
    useEffect(() => {
        getUser(users.find(user => user.id === Number(userId)))
    }, [userId])

    return (
        <>
            <h1>User Profile</h1>
            <div className="container">
                <h2>Welcome {user.name} !</h2>
                <h3>Your user email : {user.email}</h3>
            </div>
        </>
    )
}

export default UserProfile;