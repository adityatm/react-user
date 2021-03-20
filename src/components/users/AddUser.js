import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const AddUser =()=>{
    let history = useHistory();
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
        await axios.post('http://localhost:3002/users', user);
        history.push('/')
    }
    return(
        <div className="add-user mt-5">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <h1 className="font-weight-light">Add New User Information:</h1>
                        <hr/>
                        <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter name" 
                                name="name"
                                required="required"
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
                                required="required"
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
                                required="required"
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
                                required="required"
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
                        <button type="reset" className="btn btn-secondary btn-lg mr-2">Clear</button>
                        <button type="submit" className="btn btn-primary btn-lg">Add User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddUser;