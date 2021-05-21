const database = require("./database");

/* Insert with KnexJS
*/
/*
var data = [ 
    {
        name: "Mars",
        price: 28
    },
    {
        name: "Minecraft",
        price: 20
    },
    {
        name: "GTA V",
        price: 50
    },
    {
        name: "The Best Game",
        price: 100
    },
    {
        name: "La Sani",
        price: 10
    },
];

database.insert(data).into("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* --------------------------------------------------------------------------------------- */

/* Select with KnexJS
*/
/*
database.select().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* --------------------------------------------------------------------------------------- */

/* Nesded Queries with KnexJS
*/
/*
database.insert({name: "Fifa 20", price: 50}).into("games").then(data => {
    database.select(["name", "price"]).table("games").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});
*/

/* --------------------------------------------------------------------------------------- */

/* Where with KnexJS
*/
/*
database.select(["id", "price"]).where({name: "Minecraft"}).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.select()
    .whereRaw("price = 20 OR price > 30")
    .table("games").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
*/

/* --------------------------------------------------------------------------------------- */

/* Raw
*/
/*
database.raw("SELECT * FROM games")
    .then(data => {console.log(data);})
    .catch(err => {console.log(err);});
*/

/* --------------------------------------------------------------------------------------- */

/* Delete with KnexJS
*/
/*
database.where({id: 8}).delete().table("games")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
*/

/* --------------------------------------------------------------------------------------- */

/* Update with KnexJS
*/
/*
database.where({id: 1}).update({price: 34.99}).table("games")
    .then(data => {
        console.log(`Itens alterados: ${data}`);

        database.select().where({id: 1}).table("games")
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .catch(err => {
        console.log(err);
    });
*/