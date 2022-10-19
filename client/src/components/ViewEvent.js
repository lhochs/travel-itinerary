import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";

const ViewEvent= (props) => {
    const {id} = useParams();
    const [event, setEvent] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/event/' + id)
            .then((res) => {
                console.log(res.data);
                setEvent(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[id]);

    const { removeFromDom } = props;
    const deleteEvent= (id) => {
        axios.delete('http://localhost:8000/api/event/' + id)
            .then(res => {
                removeFromDom(id)
                navigate(`/`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className = "container">
            <div className="nbTop">
                <h1>Travel Planner</h1>
            </div>
            <div className="nb-bottom">
            <Link to="/">back to home</Link>
                {/* <h3>Details about: {event.eventName}</h3> */}
            </div>
            <div className="bottom">
                <div className = "eventInfo">
                <h2>{event.eventName} </h2>
                <p><strong>Description:</strong>{event.description} </p>
                <p><strong>Website:</strong> <a href ={event.website}>{event.website}</a></p>
                <p><strong>Phone #:</strong> {event.phone}</p>
                <p><strong>Address: </strong> {event.address}</p>
                </div>
                <div className = "bottomBtn">
                    <button><Link to={`/event/edit/${event._id}`}>Edit </Link></button>
                    <button onClick={(e)=> {deleteEvent(event._id)}}>Delete From Planner</button>
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;