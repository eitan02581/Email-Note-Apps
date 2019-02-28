import noteService from '../services/note-service.js'

export default {
    props: ['fatherNote'],
    template: `
        <section class="note-update-toolbar">
           <button><i class="fas fa-palette"></i></button>
           <button ><i class="far fa-image"></i></button>
           <button><i class="fas fa-archive"></i></button>
           <button @click="deleteNote"><i class="far fa-trash-alt"></i></i></button>
        </section> 
    `,
    components: {

    },
    data() {
        return {
            imageUrl: '',
        }
    },
    methods: {
        deleteNote() {
            noteService.deleteNoteByid(this.fatherNote.id)
        },
    },
  


}