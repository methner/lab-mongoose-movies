const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();
const Celebritiy = require('../models/Celebrity');

router.get('/celebrities', (req, res) => {
    console.log('celebritites');
    // get all celebrities from database
    Celebrity.find().then(celebritites => {
        // render celebritites view to display them
        res.render('celebrities', celebrityList: celebrities})
    }).catch(err => {
        console.log(err);
    })
});

router.get('/celebritites/add'), (req, res) => {
    res.render('celebrityForm');
});


router.get('/celebritites/:id', (req, res) => {
    const { title, author, description, rating };

    Celebrity.create({
        name,
        occupation, 
        catchPhrase
    })
    .then(celebrity => {
        console.log(`${celebrity.name} was added to the database`);
        res.redirect(`/celebrities/$celebrity._id}`)
    })
})

router.get('/celebrities/edit/:id', (req, res) => {
    const celebrityId = req.params.id;
    Celebrity.findById(celebrityId)
        .then(celebrity => {
            res.render('celebrityEdit', {celebrity});
        })
        .catch(err => {
            console.log(err);
        })
})


router.get('/celebrities/delete/:id', (req, res) => {
    Celebrity.deleteOne({_id: req.params.id})
        .then(() => {
            res.redirect('/celebrities/');
        })
        .catch(err => {
            console.log(err);
        })
})


