import noteService from '../services/note-service.js'
import colorPallete from '../cmp/note-update-toolbar-color-pallete.js'

export default {
    props: ['fatherNote'],
    template: `
        <section class="note-update-toolbar">
            <input ref="imageInput" v-show="imageInputActive" v-model="imageUrl" @keyup.enter="updateImage" @blur="imageInputActive = false" @click.stop placeholder="Type image-url,'Enter' to upload" type="text" id="imageUrl" size="29">
            <button @click.stop @mouseover="colorInputActive=true" @mouseout= "colorInputActive=false"><i class="fas fa-palette"></i> <color-pallete v-show="colorInputActive" @reciveColor = "changeBackgroundColor"></color-pallete></button>
            <button @click.stop="showImageInput"><i class="far fa-image"></i></button>
            <button @click.stop=toggleArchive><i class="fas fa-archive"></i></button>
            <button @click.stop="deleteNote"><i class="far fa-trash-alt"></i></i></button>
            
           
        </section> 
    `,
    components: {
        colorPallete
    },
    data() {
        return {
            imageUrl: '',
            imageInputActive:false,
            colorInputActive:false,
        }
    },
    methods: {
        deleteNote() {
            noteService.deleteNoteByid(this.fatherNote.id)
        },
        toggleArchive(){
            noteService.toggleArchiveById(this.fatherNote.id)
        },
        showImageInput(){
            this.imageInputActive = true
            this.$nextTick(() => this.$refs.imageInput.focus())
        },
        updateImage(){
            if(this.imageUrl) noteService.updateImage(this.fatherNote.id,this.imageUrl)
            this.imageInputActive = false
        },
        changeBackgroundColor(color){
            noteService.updateBackgroundColor(this.fatherNote.id,color)
        }
    },
  


}