const Event = require('../models/event.model'); 

module.exports.findAll = (req, res) => {
    Event.find()
        .then (AllEvent => res.json(AllEvent))
        .catch((err) => res.status(400).json({err}));
}

module.exports.getEvent = (req, res) => {
    Event.findOne({_id:req.params.id})
        .then (SingularEvent => res.json(SingularEvent))
        .catch((err) => res.status(400).json({err}));
}

module.exports.createEvent = (req, res) => {
    Event.create(req.body)
        .then(NewEvent => res.json(NewEvent))
        .catch((err) => res.status(400).json({err}));
}

module.exports.updateEvent = (req, res) => {
    Event.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true,})
        .then (UpdatedEvent => res.json(UpdatedEvent))
        .catch((err) => res.status(400).json({err}));
}

module.exports.deleteEvent= (req, res) => {
    Event.deleteOne({_id:req.params.id})
        .then(DeleteEvent => res.json(DeleteEvent))
        .catch((err) => res.status(400).json({err}));
}