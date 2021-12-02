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

// Fruit.updateOne({ _id:'61a84129e11e17f9a86ae036' }, { name: 'Nanas' }, function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Berhasil update data Pisang")
//     }
// })

Fruit.deleteOne({ _id: '61a84129e11e17f9a86ae036' }, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log("Berhasil delete data Nanas")
    }
})

Fruit.find(function (error, fruits) {
    if (error) {
        console.log(error)
    } else {
        mongoose.connection.close();

        console.log("Nama buah setelah data di delete")
        fruits.forEach(function (fruit) {
            console.log(fruit.name)
        })
    }
})