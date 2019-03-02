export default {
    template: `
        <section class="note-update-toolbar-color-pallete">
            <div class="color-pallete-container">
             <button class="color" @click.stop="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(255, 255, 255); border-color:rgb(182, 182, 182);"></button>
             <button class="color"  @click.stop="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(242, 139, 130);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(251, 188, 4);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(255, 244, 117);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(204, 255, 144);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(167, 255, 235);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(203, 240, 248);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(174, 203, 250);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(215, 174, 251);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(253, 207, 232);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(230, 201, 168);"></button>
             <button class="color" @click="changeColor($event.target.style.backgroundColor)" style="backgroundColor:rgb(232, 234, 237);"></button>
            </div>
        </section> 
    `,
    methods:{
        changeColor(color){
         this.$emit('reciveColor',color)
        }
    }
}
  

