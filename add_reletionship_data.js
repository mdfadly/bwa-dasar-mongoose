const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db-mongoose');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data name tidak ada, tolong di isi!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    riview: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data name tidak ada, tolong di isi!']
    },
    age: {
        type: Number
    },
    favoriteFruit: fruitSchema
})

const People = mongoose.model("People", peopleSchema);

const fruitDuku = new Fruit({
    name: "Duku",
    rating: 8,
    riview: "rasanya manis"
})

fruitDuku.save(function (error) {
    if(error){
        console.log(error)
    }else{
        console.log("berhasil simpan buah duku kedalam db")
    }
})

const people = new People({
    name: "Angga",
    age: 24,
    favoriteFruit: fruitDuku
})

people.save(function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("berhasil simpan People kedalam db")
    }
})
