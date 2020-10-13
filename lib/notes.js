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
    //console.log('delete function in lib/notes.js');
    //console.log(id);
    filteredNotesArray = notesArray.filter(note => {
        //console.log(note.id);
        let stmt = note.id != id;
        //console.log(stmt);
        return stmt;
    });
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(filteredNotesArray, null, 2)
    )
    //console.log('original', notesArray);
    //console.log('filtered', filteredNotesArray);
    return filteredNotesArray;
}

module.exports = {findById, validateNote, createNewNote, deleteNote};