import noteUpdateToolbar from './note-update-toolbar.cmp.js'
import contentTodo from './todos.cmp.js'


export default {
    props: ['noteFromFather'],
    template: `
        <section ref="modal" class="note-editor-wrapper"
            :style="{ backgroundColor: colorForBackground}">

            <button 
             class="pin" 
             @click.stop="togglePinNote">
                <i class="fas fa-thumbtack"></i>
            </button>

            <img 
             :src="image" 
             v-if="isImage"/>

            <video v-if="isContentVideo"  width="560"  controls>
            <source :src="noteContentVideo" type="video/mp4">
            </video>

           
             
            <input 
             placeholder="Title" 
             class="title" 
             name="title" 
             type="text" 
             v-model="inputTitle" 
             @input="updateTitle"
            >

            <template v-if="contentContainsTodos">
                <ul>
                    <li v-for="(todo) in noteContentUndoneTodos" >
                        <content-todo 
                        :noteTodo="todo"
                        :noteId="note.id">
                    </content-todo>
                    </li>
                </ul>

                <hr v-if="noteContentDoneTodos.length">
                <ul>
                    <li v-for="(todo) in noteContentDoneTodos" >
                        <content-todo 
                        :noteTodo="todo" 
                        :noteId="note.id">
                    </content-todo>
                    </li>
                </ul>
            

                <div class="add-todo">
                    <button 
                    @click="pushNewTodo"
                    >
                        <i class="fas fa-plus"></i>
                    </button>
                
                    <input
                    @keyup.enter="pushNewTodo" 
                    placeholder="List item" 
                    type="text"
                    v-model="newTodo" 
                    >
                </div>

            </template>

                <!-- relate to non-todo note -->
            <input
             v-if="!contentContainsTodos" 
             placeholder="Note" 
             class="text" 
             name="text" 
             type="text" 
             v-model="inputText" 
             @input="updateText"
            >

            <audio v-if="isContentAudio" controls>
                <source :src="noteContentAudio" type="audio/mpeg">
            </audio>
            
            <div 
             class="details">
                created at: {{noteCreatedAt}}
            </div>


            <div class="tools-container">
            <note-update-toolbar 
             :fatherNote="note" 
             :noteId="note.id"
             @closeModal="emitTocloseModal">
            </note-update-toolbar>

            <button 
             @click="emitTocloseModal">
                close
            </button>
            </div>
       
        </section> 
    `,
    components: {
        noteUpdateToolbar,
        contentTodo,
    },
    data() {
        return {
            note: this.noteFromFather,
            inputText: null,
            inputTitle: null,
            newTodo:null,
        }
    },
    created: function () {
        this.inputText = this.noteContentText
        this.inputTitle = this.noteContentTiltle
    },
    methods: {
        togglePinNote() {
            this.note.pinned = !this.note.pinned
        },
        emitTocloseModal() {
            this.$emit('closeModal')
        },
        updateText(){
            this.noteFromFather.content.text = this.inputText
        },
        updateTitle(){
            this.noteFromFather.content.title = this.inputTitle
        },
        pushNewTodo(){
            this.$emit('createNewTodo',this.newTodo,this.note.id)
            this.newTodo = null
            console.log(this.note)
        }

    },
    computed: {
        contentContainsTodos(){
            return this.note.content.todos
        },
        noteContentUndoneTodos(){
            if(this.note.content.todos)
            return this.note.content.todos.filter(todo => todo.isDone === false);
        },
        noteContentDoneTodos(){
            if(this.note.content.todos)
            return this.note.content.todos.filter(todo => todo.isDone === true);
        },
        noteContentTiltle() {
            return this.note.content.title
        },
        noteContentText() {
            return this.note.content.text
        },
        noteCreatedAt() {
            var date = new Date(this.note.createdAt)
            var hours = date.getHours()
            var minutes = date.getMinutes()
            var seconds = date.getSeconds()
            var clock = `${hours}:${minutes}:${seconds}`
            return clock
        },
        noteContentVideo(){
            return this.note.content.videoUrl
        },
        noteContentAudio(){
            return this.note.content.audioUrl
        },
        image() {
            return this.note.content.imageUrl
        },
        colorForBackground() {
            return this.note.backgroundColor
        },
        isImage() {
            return this.note.content.imageUrl
        },
        isContentVideo(){
            return this.note.content.videoUrl
        },
        isContentAudio(){
            return this.note.content.audioUrl
        },

    },

}