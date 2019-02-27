
export default {
    props:['note'],
    template: `
        <section class="note-preview-wrapper">
             <div class="note">
             <div class="title">{{noteContentTiltle}}</div>
             {{noteContentText}}
            </div>
        </section> 
    `,
    data() {
        return {
           
        }
    },
    methods: {
       
    },
    computed:{
        noteContentTiltle(){
            return this.note.content.title
        },
        noteContentText(){
            return this.note.content.text
        }
    }
}