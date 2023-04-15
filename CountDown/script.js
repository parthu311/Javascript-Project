
// chaneg date
const endDate = "01 April 2025 10:10 PM"


document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if (diff < 0)
        return;
    // convert days
    inputs[0].value = Math.floor(diff / 3600 / 24);

    // cpmvert hour
    inputs[1].value = Math.floor(diff / 3600) % 24;

    // convert minute
    inputs[2].value = Math.floor(diff / 60) % 60;

    // convert sec
    inputs[3].value = Math.floor(diff % 60);
}
clock()

setInterval(() => {
    clock()
},
    1000
)