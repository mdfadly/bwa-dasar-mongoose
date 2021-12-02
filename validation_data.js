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

const mangga = new Fruit({
    name: "Mangga",
    rating: 10,
    riview: "rasanya manis"
})

mangga.save(function (error) {
    if(error){
        console.log(error)
    }else{
        console.log("berhasil simpan buah mangga kedalam db")
    }
})
