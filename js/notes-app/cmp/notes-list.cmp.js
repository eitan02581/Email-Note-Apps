import notePreview from './note-preview.cmp.js'
import noteService from '../services/note-service.js'
import noteEditor from '../cmp/note-editor.cmp.js'
import {eventBus,FILTER_NONE,FILTER_TEXT,FILTER_TODO,FILTER_IMAGE,FILTER_VIDEO,FILTER_AUDIO} from '../../service/event-bus.js'

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
            noteInEditor:null,
           showEditor:false,
           filteredNotes:null,

        }
    },
    methods: {
        openingEditor(note){
        this.noteInEditor = note
        this.showEditor = true

        },
        closeModal(){
            this.showEditor = false
        },
        pushNewTodo(todo,id){
            console.log(todo,id)
            noteService.pushNewComment(id,todo)
        },
        filterImage(){
            this.filteredNotes = this.notes.filter((note)=>note.content.imageUrl)
        },
        filterTodo(){
            this.filteredNotes = this.notes.filter((note)=>{
                if(note.content.todos) return note.content.todos[0]
               else return false
            })
        },
        filterText(){
            this.filteredNotes = this.notes.filter((note)=>note.content.text)
        },
        filterVideo(){
            this.filteredNotes = this.notes.filter((note)=>note.content.videoUrl)
        },
        filterAudio(){
            this.filteredNotes = this.notes.filter((note)=>note.content.audioUrl)
        },
        filterColor(color){
            this.filteredNotes = this.notes.filter((note)=>note.backgroundColor === color)
        },
        filterNone(){
            this.filteredNotes = this.notes
        },
       
        
    },
    computed: {
        pinnedNotesOnly() {
            return this.filteredNotes.filter((note) => note.pinned)
        },
        unpinnedNotesOnly() {
            return this.filteredNotes.filter((note) => !note.pinned)
        },
        pinViewMode() {
            return this.pinnedNotesOnly.length !== 0
        }
    },
    created: function () {
        this.notes = noteService.getNotes()
        this.filteredNotes = noteService.getNotes()
        //event buses
        eventBus.$on('FILTER_NONE',()=>{
            this.filterNone()
        })
        eventBus.$on('FILTER_AUDIO',()=>{
            this.filterAudio()
        })
        eventBus.$on('FILTER_TEXT',()=>{
            this.filterText()
        })
        eventBus.$on('FILTER_TODO',()=>{
            this.filterTodo()
        })
        eventBus.$on('FILTER_IMAGE',()=>{
            this.filterImage()
        })
        eventBus.$on('FILTER_VIDEO',()=>{
            this.filterVideo()
        })
        
    }
 

}