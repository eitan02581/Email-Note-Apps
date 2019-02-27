import notePreview from './note-preview.cmp.js'
import noteService from '../services/note-service.js'

export default {
    template: `
        <section class="notes-list-wrapper">
             <h1>im list cmp</h1>
             <pre>{{notes}}</pre>
             <note-preview :key="currNote.id" v-for="(currNote, idx) in notes" :note="currNote">
            </note-preview>
        </section> 
    `,
    components: {
        notePreview,
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        notes() {
            return noteService.getNotes()
        }
    }

}