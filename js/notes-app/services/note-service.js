var gNextId = 3

export default {
    getNotes,
    getArchiveNotes,

}

function getNotes() {
    return gNotes
}

function getArchiveNotes() {

}

var gNotes = [{
        id: 1,
        createdAt: 1551259417463,
        archive: false,
        pinned: false,
        content: {
            title: 'second note ever',
            text: 'im a text note also',
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