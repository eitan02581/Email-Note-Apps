import notePreview from './note-preview.cmp.js'
import noteService from '../services/note-service.js'

export default {
    template: `
        <section class="notes-list-wrapper">
            <div v-if="pinViewMode" class="block">pinned</div>

            <div class="list-container">
            <note-preview :key="currNote.id" v-for="(currNote, idx) in pinnedNotesOnly" :note="currNote">
            </note-preview>
            </div>
          
            <div v-if="pinViewMode" class="block">others</div>

            <div class="list-container">
             <note-preview :key="currNote.id" v-for="(currNote, idx) in unpinnedNotesOnly" :note="currNote">
            </note-preview>
            </div>
        </section> 
    `,
    components:{
        notePreview,
    },
    data() {
        return {
            notes:null,
            
        }
    },
    methods: {
     
    },
    computed:{
        pinnedNotesOnly(){
           return this.notes.filter((note)=>note.pinned)
        },
        unpinnedNotesOnly(){
           return  this.notes.filter((note)=>!note.pinned)
        },
        pinViewMode(){
            return this.pinnedNotesOnly.length !== 0
        }
    }, 
    created: function() {
        this.notes = noteService.getNotes() 

      }
    
}