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
             placeholder="Type Image-url,'Enter' to upload" 
             type="text" 
             id="imageUrl" 
             size="29"
             >

             
            <input
             ref="videoInput" 
             v-show="videoInputActive" 
             v-model="videoUrlFromUser" 
             @keyup.enter="updateVideo" 
             @blur="videoInputActive = false" 
             @click.stop 
             placeholder="Type Video-url,'Enter' to upload" 
             type="text" 
             id="videoUrl" 
             size="29"
             >

             <input
             ref="audioInput" 
             v-show="audioInputActive" 
             v-model="audioUrlFromUser" 
             @keyup.enter="updateAudio" 
             @blur="audioInputActive = false" 
             @click.stop 
             placeholder="Type Audio-url,'Enter' to upload" 
             type="text" 
             id="audioUrl" 
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
             @click.stop="showAudioInput">
                <i class="fas fa-music"></i>
            </button>

            <button 
             @click.stop="showVideoInput">
                <i class="fas fa-video"></i>
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
            videoUrlFromUser: '',
            videoInputActive:false,
            audioUrlFromUser: '',
            audioInputActive:false,
            colorInputActive:false,
        }
    },
    methods: {
        deleteNote() {
            noteService.deleteNoteByid(this.noteId)
            this.$emit('closeModal')
        },
        toggleArchive(){
            noteService.update(this.noteId,!this.noteArchive,'archive')
        },
        showImageInput(){
            this.imageInputActive = true
            this.$nextTick(() => this.$refs.imageInput.focus())
        },
        showVideoInput(){
            this.videoInputActive = true
            this.$nextTick(() => this.$refs.videoInput.focus())
        },
        showAudioInput(){
            this.audioInputActive = true
            this.$nextTick(() => this.$refs.audioInput.focus())
        },
        updateImage(){
            if(this.imageUrlFromUser) noteService.update(this.noteId,this.imageUrlFromUser,'content','imageUrl')
            this.imageInputActive = false
        },
        updateVideo(){
            if(this.videoUrlFromUser) noteService.update(this.noteId,this.videoUrlFromUser,'content','videoUrl')
            this.videoInputActive = false
        },
        updateAudio(){
            if(this.audioUrlFromUser) noteService.update(this.noteId,this.audioUrlFromUser,'content','audioUrl')
            this.audioInputActive = false
        },
        updateBackgroundColor(color){
            noteService.update(this.noteId,color,'backgroundColor')
        },
    },
    computed:{
    }
  


}