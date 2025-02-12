// console.log("Welcome Vue")
// const app=Vue.createApp({
//     //data,functions
//     template :'<h1>I am the Template</h1>'
// })
// data :
// const app = Vue.createApp({
//     //data,functions
//     data() {
//         return { title: 'Bala Ramayanam ', author: "Vemuri Gaggaiah", age: "13" }

//     }
// })
// app.mount("#app")
// click Events:
const app = Vue.createApp({
    //data,functions
    data() {
        // return { showBooks: true, showActions: true, title: 'Bala Ramayanam ', author: "Vemuri Gaggaiah", age: 13, x: 0, y: 0 }
             return { showBooks: true, showActions: false, showEvents:false,
                url:'https://github.com/dhanalakshmiputta007',
                books:[ 
                    {title: 'Bala Ramayanam ', author: "Vemuri Gaggaiah",image:"assets/images/ramayanam.jpg",isFav:true},
                    {title: 'the way of kings ', author: "brandon sanderson",image:"assets/images/kings.jpeg",isFav:false},
                    {title: 'name of the wind ', author: "patrick ruthfuss",image:"assets/images/wind.jpeg",isFav:true}

                ] }


    },
    methods: {
        changeTitle(title) {
            // console.log("You clicked Me")
            // this.title="Words Of Bala Ramayanam ",
            this.title = title

        },
        toggleShowBook() {
            this.showBooks = !this.showBooks
        }, handleEvent(event) {
            if (event === "over") {
                console.log("event :", event)
            } else if (event === "leave") {
                console.log("event :", event)
            } else if (event === "dblclick") {
                console.log("event :", event)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY

        },
        handleFav(book){
            book.isFav=!book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=>book.isFav)
        }
    }
})
app.mount("#app")

// Challenge -add to favs
//  - attach a click event to each li tag (for each book)
// - when a user clicks an li ,toggle the 'isFav' property of that book 