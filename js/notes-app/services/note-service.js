import storageService from '../../service/storage-service.js'

'use strict'
/*
NOTE SERVICE - NOTES DATABASE & C.R.U.D FUNCTIONS ARE HERE!
*/

export default {
    getNotes,
    createTextNote,
    createTodoNote,
    createImageNote,
    pushNewComment,
    update,
    deleteNoteByid,
    deleteTodo,
}

//(private functions and variables)//
var _nextId = 4
var _nextTodoId = 3

function _getNoteById(id) {
    return gNotes.find((note) => note.id === id)
}

function _save(){
    storageService.store('notes',gNotes )
    storageService.store('nextId',_nextId )
    storageService.store('nextTodoId',_nextTodoId )
}
function _load(){
    gNotes = storageService.load('notes')
    _nextId = storageService.load('nextId')
    _nextTodoId = storageService.load('nextTodoId')
}

///C.-CREATE funtcions///
function createImageNote(newImageUrl){
    _save()
}
function createTodoNote(newTitle, newTodosArray){
    var formattedTodos = []
    
    if(newTodosArray){
        formattedTodos = newTodosArray.map((todo)=>{
            var formatForTodo = {}
            formatForTodo['comment'] = todo
            formatForTodo['isDone'] = true
            formatForTodo['todoId'] = 'T' +_nextTodoId++ 
            return formatForTodo
        })
    }

    var newNote = {
        id: 'N' + _nextId++,
        createdAt: Date.now(),
        archive: false,
        pinned: false,
        content: {
            title: newTitle,
            todos: formattedTodos,
            imageUrl: '',
            videoUrl:'',
            audioUrl:'',
        },
        backgroundColor: 'white',
    }
    gNotes.push(newNote)
    console.log(gNotes)
    _save()
    return newNote
}

function createTextNote(newTitle, newText) {
    var newNote = {
        id: 'N' + _nextId++,
        createdAt: Date.now(),
        archive: false,
        pinned: false,
        content: {
            title: newTitle,
            text: newText,
            imageUrl: '',
            videoUrl:'',
            audioUrl:'',
        },
        backgroundColor: 'white',
    }
    gNotes.push(newNote)
    _save()
    return newNote
}

function pushNewComment(fatherNoteId, newComment) {
    var note = _getNoteById(fatherNoteId)
    var todo = {
        comment: newComment,
        isDone: false,
        todoId: 'T' + _nextTodoId
    }
    _nextTodoId++
    note.content.todos.push(todo)
    _save()
}
///R.-READ funtcions///
function getNotes() {
    if(storageService.load('notes')){
    _load()
    } 
    return gNotes
}
///U.-UPDATE funtcions///
function update(noteId, newValue, key, innerKey) {
    var currNote = _getNoteById(noteId)
    if (innerKey) currNote[key][innerKey] = newValue
    else currNote[key] = newValue
    _save()
}

function toggleArchiveById(noteId) {
    var currNote = _getNoteById(noteId)
    currNote.archive = !currNote.archive
    _save()
}

function updateImage(id, imageUrl) {
    var note = _getNoteById(id)
    note.content.imageUrl = imageUrl
    _save()
}

function updateBackgroundColor(noteId, color) {
    var note = _getNoteById(noteId)
    note.backgroundColor = color
    _save()
}
///D.-DELETE funtcions///
function deleteNoteByid(noteId) {
    var deleteIdx = gNotes.findIndex((note) => note.id === noteId)
    gNotes.splice(deleteIdx, 1)
    _save()
}

function deleteTodo(noteId, id) {
    var note = _getNoteById(noteId)
    var index = note.content.todos.findIndex((todo) => todo.todoId === id)
    note.content.todos.splice(index, 1)
    _save()
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
            imageUrl: '',
            videoUrl:'/css/videos/bunny.mp4',
            audioUrl:'css/audios/horse.mp3',
        },
        backgroundColor: 'rgb(255, 244, 117)',
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
            videoUrl:'',
            audioUrl:'',
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
            videoUrl:'',
            audioUrl:'',
            todos: [{
                comment: 'finish project',
                isDone: true,
                todoId: 'T1'
            }, {
                comment: 'order pizza',
                isDone: false,
                todoId: 'T2'
            }],
        },
        backgroundColor: 'rgb(242, 139, 130)',
    }
]