import noteService from '../services/note-service.js'

export default {
    template: `
        <section class="notes-creator-wrapper">

        <div 
         v-if="textCreatorActive">

            <input 
             v-model="title" 
              placeholder="title"
            >

            <input 
             v-model="text" 
             placeholder="take a note.." 
             ref="textInput"
            >

            <button 
             @click="createNewNote(title,text)">
                create note
            </button>
            
        </div>
        

        <div 
         v-else 
         class="notes-creator-place-saver" 
        >
            <span 
            @click="openTextCreator"
            >
                Take a note...
            </span>

            <button>
                <i class="far fa-check-square"></i>
            </button>

            <button>
                <i class="far fa-image"></i>
            </button>

            <button>
                <i class="fab fa-youtube"></i>
            </button>

            <button>
                <i class="fas fa-volume-down"></i>
            </button>

        </div>

        </section> 
    `,
    components: {
        noteService,
    },
    data() {
        return {
            title: '',
            text: '',
            textCreatorActive: false,
        }
    },
    methods: {
        createNewNote(title, text) {
            noteService.createTextNote(title, text)
        },
        openTextCreator() {
            this.textCreatorActive = true
            this.$nextTick(() => this.$refs.textInput.focus())
        }
    },


}