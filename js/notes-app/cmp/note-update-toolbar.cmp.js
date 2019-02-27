import noteService from '../services/note-service.js'

export default {
    props:['fatherNote'],
    template: `
        <section class="note-update-toolbar">
           <button><i class="fas fa-palette"></i></button>
           <button><i class="far fa-image"></i></button>
           <input type="file" name="pic" accept="image/*" v-model="imageUrl"  @change="updateImage">
           <button><i class="fas fa-archive"></i></button>
           <button @click="deleteNote"><i class="far fa-trash-alt"></i></i></button>
        </section> 
    `,
    components:{
        
    },
    data() {
        return {
            imageUrl:'',
        }
    },
    methods: {
     deleteNote(){
         console.log('js')
         noteService.deleteNoteByid(this.fatherNote.id)
     },
     updateImage(){
         console.log('dfdd',this.imageUrl)
         noteService.updateImage(this.fatherNote.id,this.imageUrl)
     },
     previewFile(){
        var preview = document.querySelector('img'); //selects the query named img
        var file    = document.querySelector('input[type=file]').files[0]; //sames as here
        var reader  = new FileReader();
 
        reader.onloadend = function () {
            preview.src = reader.result;
        }
 
        if (file) {
            reader.readAsDataURL(file); //reads the data as a URL
        } else {
            preview.src = "";
        }
   }
 
    
    },
    computed:{
    }, 
    created:{
 
    }

    
}