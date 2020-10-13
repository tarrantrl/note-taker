// require fs and path
const fs = require('fs');
const path = require('path');

// function to find a note by id
function findById(id, notesArray){
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

// function to add the new note to the data file
function createNewNote(note, notesArray){
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    )
    return note;
}

// function to validate note input
function validateNote(note){
    // check that the note has a title that is a string
    if (!note.title || typeof note.title !== 'string'){
        return false;
    }
    // check that the note has text that is a string
    if (!note.text || typeof note.text !== 'string'){
        return false;
    }
    return true
}

// function to delete note
function deleteNote(id, notesArray){
    filteredNotesArray = notesArray.filter(note => note.id !== id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(filteredNotesArray, null, 2)
    )
    return filteredNotesArray;
}

module.exports = {findById, validateNote, createNewNote, deleteNote};