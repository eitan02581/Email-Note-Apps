import notePreview from './note-preview.cmp.js'
import noteService from '../services/note-service.js'
import noteEditor from '../cmp/note-editor.cmp.js'


export default {
    template: `
        <section class="notes-list-wrapper">

            <div v-if="pinViewMode" class="block">
                pinned
            </div>

            <div class="list-container">
            <note-preview 
             v-for="(currNote, idx) in pinnedNotesOnly" 
             :key="currNote.id" 
             :note="currNote"
             @openEditor="openingEditor"  
            >
            <!-- notes render here -->
            </note-preview>
            </div>
          
            <div v-if="pinViewMode" class="block">
                others
            </div>

            <div class="list-container">
                <note-preview 
                 v-for="(currNote, idx) in unpinnedNotesOnly"
                 :key="currNote.id"
                 @openEditor="openingEditor"
                 :note="currNote"
                >
                <!-- notes render here -->
                </note-preview>
            </div>

            <div v-if="showEditor">
                <div @click="closeModal" class="modal-container"></div>
                <note-editor 
                :noteFromFather="noteInEditor" 
                @closeModal="closeModal"
                @createNewTodo = "pushNewTodo"
                ></note-editor>
               
            </div>

        </section> 
    `,
    components: {
        notePreview,
        noteEditor,
    },
    data() {
        return {
            notes: null,
            noteInEditor: null,
            showEditor: false,

        }
    },
    methods: {
        openingEditor(note) {
            this.noteInEditor = note
            this.showEditor = true

        },
        closeModal() {
            this.showEditor = false
        },
        pushNewTodo(todo, id) {
            console.log(todo, id)
            noteService.pushNewComment(id, todo)
        }

    },
    computed: {
        pinnedNotesOnly() {
            return this.notes.filter((note) => note.pinned)
        },
        unpinnedNotesOnly() {
            return this.notes.filter((note) => !note.pinned)
        },
        pinViewMode() {
            return this.pinnedNotesOnly.length !== 0
        }
    },
    created: function () {
        this.notes = noteService.getNotes()

    }

}