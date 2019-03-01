import notesList from '../notes-app/cmp/notes-list.cmp.js'
import notesCreator from '../notes-app/cmp/notes-creator.js'

export default {
    template: `
        <section class="notes-app-wrapper">
             <notes-creator></notes-creator>
             <notes-list/>
        </section> 
    `,
     components:{
        notesList,
        notesCreator,
    },
}