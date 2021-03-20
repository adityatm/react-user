import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';

const EditUser =()=>{
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    const {name, username, email, phone, website} = user;

    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }

    const onSubmit = async e =>{
        e.preventDefault()
        await axios.put(`http://localhost:3002/users/${id}`, user);
        alert(user.name)
        history.push('/')
    }

    useEffect(()=>{
        loadUser();
    }, [])

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data)
    }

    return(
        <div className="add-user mt-5">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <h1 className="font-weight-light">Edit User Information:</h1>
                        <hr/>
                        <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter name" 
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">User Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter username" 
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email" 
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Phone</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter phone" 
                                name="phone"
                                value={phone}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Website</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter website url" 
                                name="website"
                                value={website}
                                onChange={e => onInputChange(e)}
                            />
                        </div> 
                        <br/>
                        {/* <button type="reset" className="btn btn-secondary btn-lg mr-2">Clear</button> */}
                        <button type="submit" className="btn btn-warning btn-lg">Update User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditUser;