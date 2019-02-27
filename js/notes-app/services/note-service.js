var gNextId = 3

export default {
    getNotes,
    getArchiveNotes,
    createTextNote,
    deleteNoteByid,
    updateImage,
  
}

function getNotes() {
    return gNotes
}

function getArchiveNotes() {

}

function createTextNote(newTitle,newText){
    var newNote =  {
        id: 'N' + gNextId++,
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
    console.log('note created!',gNotes)
}

function deleteNoteByid(noteId){
    var deleteIdx = gNotes.findIndex((note)=>note.id === noteId)
    console.log('note to delete',deleteIdx)
    gNotes.splice(deleteIdx,1)
}
function updateImage(id,imageUrl){
    var note = _getNoteById(id)
    note.content.imageUrl = imageUrl
}

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
    }
]

function _getNoteById(id){
   return gNotes.find((note)=>note.id===id)
}