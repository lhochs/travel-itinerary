import React, { useState }from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllEvents from './components/AllEvents';
import EventsForm from './components/EventsForm';
import UpdateEvent from './components/UpdateEvent';
import ViewEvent from './components/ViewEvent';

function App() {

  const [event, setEvent] = useState([]);
    
  const removeFromDom = id => {
      setEvent(event.filter(event => event._id !== id)); 
  }

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route element={<AllEvents/>} path="/" />
              <Route element={<EventsForm/>} path="/new" /> 
              <Route element={<ViewEvent removeFromDom={removeFromDom}/>} path="/event/:id" /> 
              <Route element={<UpdateEvent/>} path="/event/edit/:id" />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
