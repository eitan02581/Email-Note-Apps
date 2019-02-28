import noteUpdateToolbar from './note-update-toolbar.cmp.js'

export default {
    props:['note'],
    template: `
        <section class="note-preview-wrapper">
            <div class="note" @click="emitToOpenEditor"
            :style="{ backgroundColor: colorForBackground}">
                    <button class="pin" @click.stop="togglePinNote"><i class="fas fa-thumbtack"></i></button>
                    <img :src="image" v-if="isImage"/>
                    <div   class="title">{{noteContentTiltle}}</div>
                    <div class="content">{{noteContentText}}</div>
                    <note-update-toolbar :fatherNote="note"></note-update-toolbar>
                </div>
            </div> 
        </section> 
    `,
     components:{
        noteUpdateToolbar,
   },
    data() {
        return {
           
        }
    },
    methods: {
        togglePinNote(){
            this.note.pinned =  !this.note.pinned
            console.log('pinned:',this.note.pinned)
        },
        emitToOpenEditor(){
            console.log('emiting')
            this.$emit('openEditor',this.note)
        }
    },
    computed:{
        noteContentTiltle(){
            return this.note.content.title
        },
        noteContentText(){
            return this.note.content.text
        },
        noteCreatedAt(){
            var date = new Date(this.note.createdAt)
           var hours = date.getHours()
            var minutes = date.getMinutes()
            var seconds = date.getSeconds()
           var clock = `${hours}:${minutes}:${seconds}`
        return clock
        },
        image(){
            return this.note.content.imageUrl
        },
        colorForBackground(){
            return this.note.backgroundColor
        },
        isImage(){
         return this.note.content.imageUrl
        },
        
    },
   
}