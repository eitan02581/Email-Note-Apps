import noteService from '../services/note-service.js'
import colorPallete from '../cmp/note-update-toolbar-color-pallete.js'

export default {
    props: ['fatherNote','noteId'],
    template: `
        <section class="note-update-toolbar">

            <input
             ref="imageInput" 
             v-show="imageInputActive" 
             v-model="imageUrlFromUser" 
             @keyup.enter="updateImage" 
             @blur="imageInputActive = false" 
             @click.stop 
             placeholder="Type image-url,'Enter' to upload" 
             type="text" 
             id="imageUrl" 
             size="29"
             >

            <button 
             @click.stop 
             @mouseover="colorInputActive=true" 
             @mouseout= "colorInputActive=false">
                <i class="fas fa-palette">
                    <color-pallete 
                     v-show="colorInputActive" 
                     @reciveColor = "updateBackgroundColor"
                     >
                    </color-pallete>
                </i> 
            </button>

            <button 
             @click.stop="showImageInput">
                <i class="far fa-image"></i>
            </button>

            <button 
             @click.stop=toggleArchive>
                <i class="fas fa-archive"></i>
            </button>

            <button 
             @click.stop="deleteNote">
                <i class="far fa-trash-alt"></i>
            </button>
            
           
        </section> 
    `,
    components: {
        colorPallete
    },
    data() {
        return {
            imageUrlFromUser: '',
            imageInputActive:false,
            colorInputActive:false,
        }
    },
    methods: {
        deleteNote() {
            noteService.deleteNoteByid(this.noteId)
        },
        toggleArchive(){
            noteService.update(this.noteId,!this.noteArchive,'archive')
        },
        showImageInput(){
            this.imageInputActive = true
            this.$nextTick(() => this.$refs.imageInput.focus())
        },
        updateImage(){
            if(this.imageUrlFromUser) noteService.update(this.noteId,this.imageUrlFromUser,'content','imageUrl')
            this.imageInputActive = false
        },
        updateBackgroundColor(color){
            noteService.update(this.noteId,color,'backgroundColor')
        },
    },
    computed:{
        noteArchive(){
            return  this.fatherNote.archive
        }
    }
  


}