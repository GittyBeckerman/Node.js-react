
function getUsers() {
    return [1, 2, 3, 4];
}

function getUserByID(id) {
    if(id< 4 ){
    return id;}
    else{
        return "error";
    }
}

module.exports= {
    getUsers,
    getUserByID
}