import storageService from '../../service/storage-service.js'

export default {
    getNotes,
    getArchiveNotes,
}
var gNextId = 3

var gNotes = [{
        id: 1,
        createdAt: 1551259417463,
        archive: false,
        pinned: false,
        content: {
            title: 'first note ever',
            text: 'im a text',
            imageUrl: '',
        },
        backgroundColor: 'white',
    },
    {
        id: 2,
        createdAt: 1551259417463,
        archive: false,
        pinned: false,
        content: {
            title: 'second note ever',
            text: 'im a text note also',
            imageUrl: '',
        },
        backgroundColor: 'white',
    }
]

load()

function load() {
    if (storageService.load('gNotes')) gNotes = storageService.load('gNotes')
}



function getNotes() {
    return gNotes
}

function getArchiveNotes() {

}