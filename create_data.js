const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db-mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    riview: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//     name: "Apple",
//     rating: 8,
//     riview: "rasanya manis"
// })

// apple.save(function (error) {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("berhasil simpan buah apple kedalam db")
//     }
// })

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    riview: "rasanya asam"
})

const jeruk = new Fruit({
    name: "Jeruk",
    rating: 8,
    riview: "rasanya asam dan manis"
})

const pisang = new Fruit({
    name: "Pisang",
    rating: 6,
    riview: "rasanya manis"
})

Fruit.insertMany([kiwi, jeruk, pisang], function (error) {
    if (error) {
        console.log(error)
    } else {
        mongoose.connection.close();
        console.log("berhasil simpan banyak buah")
    }
})