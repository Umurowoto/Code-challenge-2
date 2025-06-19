document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("guest-form");
    const GuestList = document.getElementById("guest-list");

    const guests = [];
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("guest-name").value;

        if (guests.length >= 10) {
            alert("Guest limit has been reached");
            return;
        }
        if (name !== "") {
            guests.push(name);
            
            GuestList.innerHTML = "";
            guests.forEach(function (guest) {
                GuestList.innerHTML += `<li>${guest}</li>`;
            });
        }
    });
});