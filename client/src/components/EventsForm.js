import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const EventsForm = (props) => {
    const [eventName, setEventName] = useState(""); 
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/event", {
            eventName, 
            description,
            website,
            phone,
            address
        })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setEventName("");
                setDescription("");
                setWebsite("");
                setPhone("");
                setAddress("");
                navigate(`/`);
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="container">
            <div className="nbTop">
                <h1>Travel Planner</h1>
                <Link to="/">back to home</Link>
            </div>
            <div className="nb-bottom">
            <h3>Add an event/activity to your planner</h3>
            </div>
            <div className="bottom">
                <form onSubmit={onSubmitHandler}>
                    <div className="form">
                        <p>
                            <label>Event Name: </label>{errors.eventName ? <p className ="errors">{errors.eventName.message}</p> : null}<input type= "text" value = {eventName} name= "eventName" onChange = {(e)=>setEventName(e.target.value)}/>
                        </p>
                        <p>
                            <label>Description: </label>{errors.description? <p className ="errors">{errors.description.message}</p> : null}<input type="text" value = {description} name= "description" onChange = {(e)=>setDescription(e.target.value)}/>
                        </p>
                        <p>
                            <label>Website: </label>{errors.website? <p className ="errors">{errors.website.message}</p> : null}<input type="text" value = {website} name= "website" onChange = {(e)=>setWebsite(e.target.value)}/>
                        </p>
                        <p>
                            <label>Phone: </label>{errors.phone? <p className ="errors">{errors.phone.message}</p> : null}<input type="text" value = {phone} name= "phone" onChange = {(e)=>setPhone(e.target.value)}/>
                        </p>
                        <p>
                            <label>Address: </label>{errors.address? <p className ="errors">{errors.address.message}</p> : null}<input type="text" value = {address} name= "address" onChange = {(e)=>setAddress(e.target.value)}/>
                        </p>
                    </div>
                    <button type="submit" value="Create">Add Event</button>
                </form>
            </div>
        </div>
    );
};

export default EventsForm;