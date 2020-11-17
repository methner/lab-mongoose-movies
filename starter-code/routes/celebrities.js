const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

router.get('/celebrities', (req, res) => {
    console.log('celebritites');
    // get all celebrities from database
    Celebrity.find().then(celebrities => {
        // render celebritites view to display them
        console.log(celebrities);
        res.render('celebrities', {celebrityList: celebrities})
    }).catch(err => {
        console.log(err);
    })
});

// router.get('/celebritites/add'), (req, res) => {
//     res.render('celebrityForm');
// });


router.get('/celebritites/:id', (req, res) => {
    const { title, author, description, rating } = celebrities;
});

// router.get('/celebrities/edit/:id', (req, res) => {
//     const celebrityId = req.params.id;
//     Celebrity.findById(celebrityId)
//         .then(celebrity => {
//             res.render('celebrityEdit', {celebrity});
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })


// router.get('/celebrities/delete/:id', (req, res) => {
//     Celebrity.deleteOne({_id: req.params.id})
//         .then(() => {
//             res.redirect('/celebrities/');
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })


// router.post('/celebritites/edit/:id', (req, res) => {
//     const { name, occupation, catchPhrase } = req.body;
//     Celebrity.findByIdAndUpdate(req.params.id, {
//         name: name,
//         occupation: occupation, 
//         catchPhrase: cahtchPhrase
//     })
//     .then(celebrity = {
//         res.redirect(`/celebritites/$celebrity._id}`);
//     })
//     .catch(err => {
//      console.log(err);
//     })
// })


module.exports = router;