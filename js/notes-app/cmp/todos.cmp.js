import noteService from '../services/note-service.js'
/////notice that this component CHANGE THE MODEL

export default{
    props:['noteTodo','noteId'],
    components:{
        noteService,
    },
    template: `
        <section class="todos-wrapper">
         
        <div class="todo-container">
            <button 
            v-if="noteId"
            class="x"
            @click.stop="deleteComment">
                <i class="fas fa-times"></i>
            </button>

            <div 
                class="done-todo"
                v-if="noteTodo.isDone"
                :style="{'text-decoration':'line-through'}"
                >
                <button 
                @click.stop="noteTodo.isDone = !noteTodo.isDone">
                    <i class="far fa-check-square"></i>
                </button>

                {{noteTodo.comment}}
            </div>

            <div 
            class="undone-todo"
            v-else
            >
            <button 
            @click.stop="noteTodo.isDone = !noteTodo.isDone">
                <i class="far fa-square"></i>
            </button>
        {{noteTodo.comment}}
            </div>
        </div>
        
        
        </section>
    `,
     data() {
        return {
          
        }
    },
    methods:{
        deleteComment(){
            noteService.deleteTodo(this.noteId,this.noteTodo.todoId)
        }
    }
 
}