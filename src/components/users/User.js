import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const User = () =>{
    let {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        username: "",
        email: "",
        phone: "",
        website: ""        
    })

    useEffect(()=>{
        loadUser()
    }, [])

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data)
    }


    return(
        <div className="container mt-4">
            <Link className="btn btn-outline-primary btn-sm mr-2" to="/">Back to Home</Link>
            <Link className="btn btn-outline-warning btn-sm" to={`/users/edit/${user.id}`}>Edit</Link>
            <hr/>
            <h2>User Id: {user.id} </h2>
            <ul className="list-group">
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">Username: {user.username}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">Phone: {user.phone}</li>
            <li className="list-group-item">Website: {user.website}</li>
            </ul>            
        </div>
    )
}

export default User;