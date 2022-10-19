const EventController = require('../controllers/event.controller'); 
module.exports = (app) => {
    app.get('/api/event', EventController.findAll);
    app.post('/api/event', EventController.createEvent); 
    app.get('/api/event/:id', EventController.getEvent);
    app.put('/api/event/:id', EventController.updateEvent);
    app.delete('/api/event/:id', EventController.deleteEvent);
};
