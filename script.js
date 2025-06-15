
const guests = []

function addGuest(){
    let input = document.getElementsByClassName("guestname");
if(guests.length >= 10){
    console.log("Guest list limit has been reached");
} else {
    const newGuest = {
        name: name,
        attendance: "attending",
    };
    guests.push(newGuest)
    console.log(guests)
}
}


function showlist(){
    let list = document.getElementsByClassName("guestlist");
    for (let i=0; i < guests.length; i++){
        let list = document.createElement("li");
        console.log(guests[i])
    }
}