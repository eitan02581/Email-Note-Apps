import notesList from '../notes-app/cmp/notes-list.cmp.js'

export default {
    template: `
        <section class="notes-app-wrapper">
            <h1>im notes app</h1>
             <notes-list/>
        </section> 
    `,
     components:{
        notesList,
    },
    data() {
        return {
           
        }
    },
    methods: {
       
    },
   
}