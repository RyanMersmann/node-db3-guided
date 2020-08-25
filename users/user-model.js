const db = require("../data/config")

function findPostsByUserID(userID) {
    // no need for await since it's a function and is returned when called
    return db("posts as p")
    .innerJoin("users as u", "u.id", "p.user_id")
    .where("p.user_id", userID)
    .select("p.id", "p.contents", "u.username")
}

module.exports = {
    findPostsByUserID,
}