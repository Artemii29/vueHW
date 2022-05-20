const imageCard= {
    props: ["image","name"],
    emits:["deleteCard"],
    template: `
        <div>
             <p>{{name}}</p>
             <img :src="image">
             <button  v-on:click="$emit('deleteCard',name)">Delete</button>
         </div>
        `
}
const gallery = {
    methods:{
        deleteCard:function (value){
            console.log(value)
            images.splice(value-1,1)
        }
    },
    template: `
    <image-card v-for="image in images" :image="image.img" :name="image.name" @delete-card="deleteCard"></image-card>
    `,
    data(){
        return{
            images:[
                {img:"https://picsum.photos/id/1/200/300",name:1},
                {img:"https://picsum.photos/id/1/200/300",name:2},
                {img:"https://picsum.photos/id/1/200/300",name:3},

            ]}
    }
}


let app = Vue.createApp()
app.component('image-card', imageCard)
app.component('image-gallery', gallery)

app.mount("#App")