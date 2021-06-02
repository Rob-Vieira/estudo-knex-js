const database = require("./database");

/* Insert with KnexJS
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
database.select().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* --------------------------------------------------------------------------------------- */

/* Nesded Queries with KnexJS
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
database.raw("SELECT * FROM games")
    .then(data => {console.log(data);})
    .catch(err => {console.log(err);});
*/

/* --------------------------------------------------------------------------------------- */

/* Delete with KnexJS
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

/* --------------------------------------------------------------------------------------- */

/* Order By with KnexJS
 * desc - Decrescente | asc - Crescente
database.select().table("games").orderBy("name", "asc")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
*/

/* --------------------------------------------------------------------------------------- */

/* InnerJoin 1 p 1

 * Insert
database.insert({
    name: "Mojaang",
    games_id: 3
}).table("studios").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.select(["games.*", "studios.name as studios_name"]).table("games")
    .innerJoin("studios", "studios.games_id", "games.id")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
*/

/* --------------------------------------------------------------------------------------- */

/* InnerJoin + Where 

database.select(["games.*", "studios.name as studios_name"]).table("games")
    .innerJoin("studios", "studios.games_id", "games.id")
    .where("games.id", 4)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
*/

/* --------------------------------------------------------------------------------------- */

/* InnerJoin 1 p M

database.select(["games.*", "studios.name as studios_name"]).table("games")
    .innerJoin("studios", "studios.games_id", "games.id")
    .then(data => {

        // Tratamento dos dados
        var game = {
            id: 0,
            name: "",
            studios: []
        }

        game.id = data[0].id;
        game.name = data[0].name;
        
        data.forEach(studios => {
            game.studios.push({name: studios.studios_name});
        });

        console.log(game);
    })
    .catch(err => {
        console.log(err);
    });
*/

/* --------------------------------------------------------------------------------------- */

/* InnerJoin M p M

database.select([
            "studios.name as studio_name",
            "games.name as game_name"
        ])
        .table("games_estudios")
        .innerJoin("games", "games.id", "games_estudios.game_id")
        .innerJoin("studios", "studios.id", "games_estudios.studio_id")
        .where("games_estudios.studio_id", 3)
        .then(data => {
            var studio = {
                "name": "",
                "games": []
            };

            studio.name = data[0].studio_name;

            data.forEach(game => {
                studio.games.push(game.game_name);
            });

            console.log(studio);
        })
        .catch(err => {
            console.log(err);
        });
*/

/* --------------------------------------------------------------------------------------- */

async function transactionTest(){
    try {
        await database.transaction(async trans => {
            await database.insert({name: "Zuarem Inc."}).table("studios");
            await database.insert({name: "Mega Games"}).table("studios");
            await database.insert({name: "Blizzard"}).table("studios");
            await database.insert({name: "GamesTec"}).table("studios");
        });
    } catch (error) {
        console.log(error);
    }
}

transactionTest();