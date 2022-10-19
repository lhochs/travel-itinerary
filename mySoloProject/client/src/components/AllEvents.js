import "../App.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllEvents = () => {
    const [allEvents, setAllEvents] = useState ([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/event")
        .then((res) => {
            console.log(res.data);
            setAllEvents(res.data);
        })
        .catch((err) => {
            console.log(err.res);
        });
    }, []);

return (
    <div className="container">
        <div className="nav-bar">
            <div className="nbTop">
                <h1>Travel Planner</h1>
            </div>
            <div className="nb-bottom">
            <Link to="/new">Add Event to Planner</Link>
            </div>
        </div>
        <div className="inner-box">
                    { allEvents.map((event, index) => {
                        return(
                            <p key={index} className = "events"> 
                                <Link to={`/event/${event._id}`}>{event.eventName}</Link>
                                <p>{event.description}</p>
                                <Link to={`/event/edit/${event._id}`}>Edit</Link>
                            </p> 
                        );
                    })}
        </div>
    </div>
);
};

export default AllEvents;