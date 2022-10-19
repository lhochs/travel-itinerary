import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const UpdateEvent= (props) => {
    const { id } = useParams();
    const [eventName, setEventName] = useState(""); 
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/event/` + id )
            .then((res)=>{
                console.log(res.data);
                setEventName(res.data.eventName);
                setDescription(res.data.description);
                setWebsite(res.data.website);
                setPhone(res.data.phone);
                setAddress(res.data.address);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateEvent = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/event/` + id, {
            eventName, 
            description,
            website,
            phone,
            address
        })
        .then((res)=>{
            console.log(res);
            navigate(`/`);
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors)
        });
    };

    return (    
        <div className="container">
            <div className="nbTop">
                <h1>Travel Planner</h1>
                <Link to="/">back to home</Link>
            </div>
            <div className="nb-bottom">
            <h3>Update event/activity in your planner</h3>
            </div>
            <div className="bottom">
                <form onSubmit={updateEvent}>
                    <div className="form">
                        <p className="form-data">
                            <label>Event Name: </label>{errors.eventName ? <p className ="errors">{errors.eventName.message}</p> : null}<input type= "text" value = {eventName} name= "eventName" onChange = {(e)=>setEventName(e.target.value)}/>
                        </p>
                        <p className="form-data">
                            <label>Description: </label>{errors.description? <p className ="errors">{errors.description.message}</p> : null}<input type="text" value = {description} name= "description" onChange = {(e)=>setDescription(e.target.value)}/>
                        </p>
                        <p className="form-data">
                            <label>Website: </label>{errors.website? <p className ="errors">{errors.website.message}</p> : null}<input type="text" value = {website} name= "website" onChange = {(e)=>setWebsite(e.target.value)}/>
                        </p>
                        <p className="form-data">
                            <label>Phone: </label>{errors.phone? <p className ="errors">{errors.phone.message}</p> : null}<input type="text" value = {phone} name= "phone" onChange = {(e)=>setPhone(e.target.value)}/>
                        </p>
                        <p className="form-data">
                            <label>Address: </label>{errors.address? <p className ="errors">{errors.address.message}</p> : null}<input type="text" value = {address} name= "address" onChange = {(e)=>setAddress(e.target.value)}/>
                        </p>
                    </div>
                    <button type="submit" value="update">Update Event</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateEvent;