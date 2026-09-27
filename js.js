let container = document.getElementById("container");

container.addEventListener("click", function(event) {

    if (event.target.id === "btn1") {
        document.body.style.backgroundColor = "red";
    }

    if (event.target.id === "btn2") {
        document.body.style.backgroundColor = "pink";
    }

    if (event.target.id === "btn3") {
        document.body.style.backgroundColor = "yellow";
    }

    if (event.target.id === "btn4") {
        document.body.style.backgroundColor = "blue";
    }

});