
const mongoose = require('mongoose');
const validator = require('validator');



mongoose.connect("mongodb://localhost:27017/dk")
    .then(() => console.log("connection successful..."))
    .catch((err => console.log(err)));


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        set: value => value.toUpperCase(),
        trim: true,
        minlength: 2,
        maxlength: 30
    },
    ctype: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["Front End", "database"]
    },
    videos: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Videos should not be negative")
            }
        }
    },
    author: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("your emali is not a validate")
            }

        }
    },
    active: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
// const Playlist = mongoose.model("Playlist", playlistSchema);


// const createDocument = async () => {
//     try {
//         const nodePlaylist = new Playlist({
//             name: "javascript",
//             ctype: "Front End",
//             videos: 70,
//             author: "kartik",
//             active: true
//         })
//         const result = await nodePlaylist.save( true // <-- Corrected typo)
//         console.log(result);

//     } catch (err) {
//         console.log(err)
//     }−

// }

// createDocument();

// create multiple mongoose.Collection in schema or documents :--------------   

const Playlist = mongoose.model("Playlist", playlistSchema);


const createDocument = async () => {
    try {
        // const reactPlaylist = new Playlist({
        //     name: "react",
        //     ctype: "Front End",
        //     videos: 70,
        //     author: "kartik",
        //     active: true
        // })
        // const mongodbPlaylist = new Playlist({
        //     name: "REACT JS",
        //     ctype: "Database",
        //     videos: 70,
        //     author: "raj",
        //     active: true
        // })
        const mongoosePlaylist = new Playlist({
            name: "dabhi",
            ctype: "DataBase",
            videos: 5,
            active: true,
            email: "raJ123@gmail.com"
        })
        const result = await Playlist.insertMany([mongoosePlaylist])
        console.log(result);

    } catch (err) {
        console.log(err)
    }

}

createDocument();



// comparetor opreator 

//====>    greater then query:-------

// const getDocument = async () => {
//     const result = await Playlist
//         .find({ videos: { $gt: 50 } })
//         .select({ name: 1 })
//     console.log(result)
// }

// getDocument()



// ===> this code is get match data and $in opeartor is use:--------

// const getDocument = async () => {
//     const result = await Playlist
//         .find({ ctype: { $nin: ["Front End", "DataBase", "Database"] } })
//         .select({ name: 1 })
//     console.log(result)
// }

// getDocument()


// const result = await Playlist
//     .find({ $and: [{ ctype: "Database" }, { author: "raj" }] })
//     .select({ name: 1 })
// console.log(result)
// }
// getDocument()
