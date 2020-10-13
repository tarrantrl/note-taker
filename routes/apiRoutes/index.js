// require router
const router = require('express').Router();
// require the validateNote function
const {validateNote, createNewNote} = require('../../lib/notes');
// require the note data
const notes = require('../../db/db.json');

// set up the get request for the notes api
router.get('/notes', (req, res) => {
    res.json(notes);
})

// set up the post request for the notes api
router.post('/notes', (req, res) => {
    // create an id based on the length of the current notes list
    req.body.id = notes.length.toString();
    // check that the note submitted is valid
    if (!validateNote(req.body)){
        // if the note is not valid, send a 400 error to indicate user error
        res.status(400).send('The note is not properly formatted.');
    } else {
        // add the note to the data file
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
})

module.exports = router;