'use strict'
/*
NOTE SERVICE - NOTES DATABASE & C.R.U.D FUNCTIONS ARE HERE!
*/

export default {
    getNotes,
    createTextNote,
    pushNewComment,
    update,
    deleteNoteByid,
    deleteTodo,
}

//(private functions and variables)//
var _nextId = 4
var _nextTodoId = 3
function _getNoteById(id){
    return gNotes.find((note)=>note.id===id)
}

///C.-CREATE funtcions///
function createTextNote(newTitle,newText){
    var newNote =  {
        id: 'N' + _nextId++,
        createdAt: Date.now(),
        archive: false,
        pinned: false,
        content: {
            title: newTitle,
            text: newText,
            imageUrl:'',
        },
        backgroundColor: 'white',
    }
    gNotes.push(newNote)
}
function pushNewComment(fatherNoteId,newComment){
    var note = _getNoteById(fatherNoteId)
    var todo = {comment:newComment,isDone:false,todoId:'T'+_nextTodoId}
    _nextTodoId++
    note.content.todos.push(todo)
}
///R.-READ funtcions///
function getNotes() {
    return gNotes
}
///U.-UPDATE funtcions///
function update(noteId,newValue,key,innerKey){
var currNote = _getNoteById(noteId)
if(innerKey) currNote[key][innerKey] = newValue
else currNote[key] = newValue
}

function toggleArchiveById(noteId){
    var currNote = _getNoteById(noteId)
    currNote.archive = !currNote.archive
}
function updateImage(id,imageUrl){
    var note = _getNoteById(id)
    note.content.imageUrl = imageUrl
}
function updateBackgroundColor(noteId,color){
    var note = _getNoteById(noteId)
    note.backgroundColor = color
}
///D.-DELETE funtcions///
function deleteNoteByid(noteId){
    var deleteIdx = gNotes.findIndex((note)=>note.id === noteId)
    gNotes.splice(deleteIdx,1)
}
function deleteTodo(noteId,id){
    var note = _getNoteById(noteId)
    var index = note.content.todos.findIndex((todo)=>todo.todoId===id)
    note.content.todos.splice(index,1)
}





//_The notes database itself: 
var gNotes = [{
        id: 'N1',
        createdAt: 1551259417463,
        archive: false,
        pinned: true,
        content: {
            title: 'first note ever',
            text: 'im a text',
            imageUrl:'',
        },
        backgroundColor: 'yellow',
    },
    {
        id: 'N2',
        createdAt: 1551259417463,
        archive: false,
        pinned: false,
        content: {
            title: 'second note ever',
            text: 'im a text note also',
            imageUrl: 'css/images/ball.png',
        },
        backgroundColor: 'white',
    },
    {
        id: 'N3',
        createdAt: 1551463144549,
        archive: false,
        pinned: true,
        content: {
            title: 'third note ever',
            text: '',
            imageUrl: '',
            todos:[{comment:'finish project',isDone:true,todoId:'T1'},{comment:'order pizza',isDone:false,todoId:'T2'}],
        },
        backgroundColor: 'hotpink',
    } 
]

