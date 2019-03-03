import noteUpdateToolbar from './note-update-toolbar.cmp.js'
import contentTodo from './todos.cmp.js'

export default {
    props:['note'],
    template: `
        <section class="note-preview-wrapper">
        <div class="note" 
            @click="emitToOpenEditor"
            :style="{ backgroundColor: noteBackgroundColor}">

                <button 
                 class="pin" 
                 @click.stop="togglePinNote">
                    <i class="fas fa-thumbtack"></i>
                </button>

                <img 
                 v-if="isContentImage"
                 :src="noteContentImageUrl" 
                />

                <video v-if="isContentVideo"  width="238"  controls>
                <source :src="noteContentVideo" type="video/mp4">
                </video>

                
               

                <div 
                 class="title"
                 v-if="isContentTitle">
                    {{noteContentTiltle}}
                </div>

                <div 
                 class="content"
                 v-if="contentContainsTodos||isContentText"
                 >

                <template v-if="contentContainsTodos">
                <ul>
                    <li v-for="(todo,index) in noteContentUndoneTodos" >
                        <content-todo :noteTodo="todo"></content-todo>
                    </li>
                </ul>

                <hr v-if="noteContentDoneTodos.length">
                <ul>
                    <li v-for="(todo,index) in noteContentDoneTodos" >
                        <content-todo :noteTodo="todo"></content-todo>
                    </li>
                </ul>
                </template>
                <template v-if="isContentText">
                {{noteContentText}}
                </template>
                
                </div>

                
                <audio v-if="isContentAudio" controls>
                <source :src="noteContentAudio" type="audio/mpeg">
                </audio>

                <note-update-toolbar 
                    :fatherNote="note"
                    :noteId="note.id">
                </note-update-toolbar>

            </div>
        </div> 
        </section> 
    `,
     components:{
        noteUpdateToolbar,
        contentTodo,
   },
   data() {
        return {
          
        }
    },
    methods: {
        togglePinNote(){
            this.note.pinned =  !this.note.pinned
        },
        emitToOpenEditor(){
            this.$emit('openEditor',this.note)
        },
    },
    computed:{
        contentContainsTodos(){
            if(this.note.content.todos) return this.note.content.todos[0] //empty array is truthy,and we want it to return false
            else return this.note.content.todos
        },
        noteContentUndoneTodos(){
            if(this.note.content.todos)
            return this.note.content.todos.filter(todo => todo.isDone === false);
        },
        noteContentDoneTodos(){
            if(this.note.content.todos)
            return this.note.content.todos.filter(todo => todo.isDone === true);
        },
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
        noteContentImageUrl(){
            return this.note.content.imageUrl
        },
        noteContentVideo(){
            return this.note.content.videoUrl
        },
        noteContentAudio(){
            return this.note.content.audioUrl
        },
        noteBackgroundColor(){
            return this.note.backgroundColor
        },
        isContentImage(){
         return this.note.content.imageUrl
        },
        isContentVideo(){
            return this.note.content.videoUrl
        },
        isContentAudio(){
            return this.note.content.audioUrl
        },
        isContentTitle(){
            return this.note.content.title
        },
        isContentText(){
            return this.note.content.text
        },
        
        
    },
   
}