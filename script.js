document.getElementById("res").style.display = "none";

function table() {
    let number = document.getElementById("multi").value;
    if (isNaN(number) || number < 1 || number > 100) {
        document.getElementById("res").innerHTML = "Invalid value! <br> Enter a value between 0 and 100!";
    } else {
        console.log(number);
        let table = "";
        for (let i = 1; i < 16; i++) {
            table += number + " * " + i + " = " + number * i + "<br>";
        }
        document.getElementById("res").innerHTML = table;
        document.getElementById("res").style.display = "block";
    }
}

function reset() {
    document.getElementById("multi").value = "";
}