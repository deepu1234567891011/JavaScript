let input = document.getElementById("input");
let addbtn = document.getElementById("addbtn");
let tasklist = document.getElementById("tasklist");

addbtn.addEventListener("click", function () {

    let li = document.createElement("li");

    li.textContent = input.value;

    // Delete button
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";

    li.append(deletebtn);
    tasklist.append(li);

    // Clear input
    input.value = "";

    // Delete task
    deletebtn.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });

    // Complete / Uncomplete task
    li.addEventListener("click", function () {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through";
        }
    });

});