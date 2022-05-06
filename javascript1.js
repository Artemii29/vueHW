const ComponentsApp = {
    data() {
        return {
            cats: [
                {
                    name: "Люся",
                    age: 1,
                    color: "трехцветная",
                    img: "https://picsum.photos/id/219/1000/1000"
                },
                {
                    name: "Макс",
                    age: 4,
                    color: "серый",
                    img: "https://picsum.photos/id/1074/1000/1000"
                },
                {
                    name: "Василий",
                    age: 1,
                    color: "трехцветный",
                    img: "https://picsum.photos/id/593/1000/1000"
                }
            ]
        }
    }
}

const app = Vue.createApp(ComponentsApp)
app.component('cat-item', {
    props: ['cat'],
    template: ` <div>
                <h2>{{ cat.name }}</h2>
                <div>Возраст: {{cat.age}}</div>
                <div>Цвет: {{cat.color}}</div>
                <img :src="cat.img" class="img"/>
                <a href="#" class="button">Подробнее</a></div>`
})

app.mount('#application')
