import express from 'express';
import mongoose from 'mongoose';
import Society from './models/Society.js';
import Connect from './lib/utils/connection.js';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json())

app.listen(3001, () => {
    console.log("Hello");
});

// mongoose.connect("mongodb+srv://dezynation:admin@cluster0.4e0ya7l.mongodb.net/techwhiz", {
//     useNewUrlParser: true,
// });

// app.get('/', async (req, res) => {
//         const society = new SocietyModel({
//         name: "TechWhiz",
//         found: new Date().toJSON().slice(0, 10),
//         description: "This is IT society of PGDAV college, University of Delhi",
//         clubs: [
//             {
//                 name: "Web Development",
//                 description: "This is web dev",
//             },
//             {
//                 name: "Coding Club",
//                 description: "This is coding club",
//             }
//         ],
//         activities: [
//             {
//             name: "One piece",
//             description: "One piece is real"
//             },
//             {
//             name: "Naruto",
//             description: "One piece >>>> Naruto"
//             }
//     ],
//     events: [
//         {
//             name: "Aaghaz'21",
//             competetions: [
//             {
//                 name: "Codetoons",
//                 description: "for the enthusiastic gamers"
//             },
//             {
//                 name: "Valorantium",
//                 description: "for the enthusiastic gamers"
//             }
//         ]
//         },

//         {
//             name: "Aarohana'23",
//             competetions: [
//             {
//                 name: "Codetoons",
//                 description: "for the enthusiastic gamers"
//             },
//             {
//                 name: "Valorantium",
//                 description: "for the enthusiastic gamers"
//             }
//         ]
//         }
//     ]

//     });

//     try {
    //         await society.save()
    //         console.log("one")
    //     } catch (err) {
        //         console.log(err)
//     }
// })

app.get('/get', async (req, res) => {
    await Connect()
    const results = await Society.find()
    if (results) {
        console.log(results)
        res.status(200).json(results)
    }
    else {
        console.log("Error while fetching!")
        res.status(404).send("Not found!")
    }

})
