require('./db')

const City = require('../models/City')

const citiesColection = [
    {
        nombre: "New York",
        pais: "United States",
        foto: "https://i.imgur.com/U8DDeap.png",
        datos: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        nombre: "London",
        pais: "United Kingdom",
        foto: "https://i.imgur.com/crAvN4D.png",
        datos: "Repudiandae architecto eius quae corrupti possimus in reiciendis magni voluptates doloribus placeat rerum voluptatem."
    },
    {
        nombre: "Paris",
        pais: "France",
        foto: "https://i.imgur.com/EU34QEz.png",
        datos: "Totam deleniti nisi obcaecati doloremque cumque beatae illo libero, exercitationem ipsum eveniet, ab earum! Pariatur, delectus."
    },
    {
        nombre: "Tokyo",
        pais: "Japan",
        foto: "https://i.imgur.com/OQggslf.png",
        datos: "Itaque consectetur repudiandae provident soluta aliquid praesentium laborum ad odit amet earum magnam commodi doloribus."
    },
    {
        nombre: "Sydney",
        pais: "Australia",
        foto: "https://i.imgur.com/eJArKag.png",
        datos: "Ratione neque nihil ipsam pariatur distinctio excepturi iusto deserunt obcaecati aliquid qui quas saepe sequi modi ea."
    },
    {
        nombre: "Rome",
        pais: "Italy",
        foto: "https://i.imgur.com/MJgaKGf.png",
        datos: "Rem deserunt ex et eos? Minus incidunt, quas eveniet esse odio tempora excepturi error ipsam doloremque explicabo mollitia."
    },
    {
        nombre: "Cairo",
        pais: "Egypt",
        foto: "https://i.imgur.com/IeNEVPm.png",
        datos: "Magni id optio quam perspiciatis voluptates, soluta aperiam dolores. Consectetur, quas repellat."
    },
    {
        nombre: "Rio de Janeiro",
        pais: "Brazil",
        foto: "https://i.imgur.com/7ZgxiaA.png",
        datos: "Autem deleniti architecto nulla est porro cumque quod modi."
    },
    {
        nombre: "Beijing",
        pais: "China",
        foto: "https://i.imgur.com/gc5y5sC.png",
        datos: "Dolorum minima ratione magnam tenetur fugit distinctio quaerat itaque explicabo ut esse quis, ipsum nulla, eum amet reprehenderit."
    },
    {
        nombre: "Moscow",
        pais: "Russia",
        foto: "https://i.imgur.com/yaj7r5b.png",
        datos: "Explicabo aliquam quas rem praesentium consectetur voluptatem accusantium libero inventore hic natus?"
    },
    {
        nombre: "Toronto",
        pais: "Canada",
        foto: "https://i.imgur.com/FIZ2Y06.png",
        datos: "Possimus in reiciendis magni voluptates doloribus placeat rerum voluptatem."
    },
    {
        nombre: "Mumbai",
        pais: "India",
        foto: "https://i.imgur.com/06dgAxe.png",
        datos: "Quas rem praesentium consectetur voluptatem accusantium libero aliquam."
    },
    {
        nombre: "Bariloche",
        pais: "Argentina",
        foto: "https://i.imgur.com/Ju6AI58.png",
        datos: "Tenetur fugit distinctio quaerat itaque explicabo ut esse quis, ipsum nulla, eum amet reprehenderit."
    },
    {
        nombre: "Ibiza",
        pais: "Spain",
        foto: "https://i.imgur.com/6yjZ3xI.png",
        datos: "Tenetur fugit distinctio quaerat itaque explicabo ut esse quis, ipsum nulla, eum amet reprehenderit."
    },
    {
        nombre: "Mykonos",
        pais: "Greece",
        foto: "https://i.imgur.com/rrC80Y3.png",
        datos: "Tenetur fugit distinctio quaerat itaque explicabo ut esse quis, ipsum nulla, eum amet reprehenderit."
    },
]


City.insertMany(citiesColection)
.then(() => {
    console.log("Collection is successfully created");
})
.catch((error) => {
    console.log(error);
})

// Para cargar la colección desde acá, hay que ejecutar este archivo con node, no en app.js