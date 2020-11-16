const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/lab-mongoose-movies', {
    useNewUrlParser: true
});

const celebrities = [
    {
        name: "Angelina Jolie",
        occupation: "actress",
        catchPhrase: "I do not need a catchphrase."
    },
    {
        name: "Brad Pitt",
        occupation: "actor",
        catchPhrase: "I do not need a catchphrase either."
    },
    {
        name: "Leonardo DiCaprio",
        occupation: "actor",
        catchPhrase: "What the hell is a catchphrase."
    },
];


Celebrity.insertMany(celebrities)
    .then(data => {
        console.log('Success! ${data.lengtgh} celebrities added to the collection');
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    });