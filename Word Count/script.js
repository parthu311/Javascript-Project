let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
    var x = this.value;
    let text = x.length;
    document.getElementById("char").innerHTML = text;



    x = x.trim();
    let words = x.split(" ")
    let Aa = words.filter(function (elm) {
        return elm != "";

    });
    console.log(Aa);
    document.getElementById("word").innerHTML = words.length;
});