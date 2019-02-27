import noteService from '../services/note-service.js'

export default {
    template: `
        <section class="notes-creator-wrapper">
        <input v-model="title" placeholder="title">
        <input v-model="text" placeholder="take a note..">
           <button @click="createNewNote(title,text)">create note</button>
        </section> 
    `,
     components:{
        noteService,
    },
    data() {
        return {
           title:'',
           text:'',
        }
    },
    methods: {
        createNewNote(title,text){
            noteService.createTextNote(title,text)
        }
    },
    computed:{
       
    }
   
}