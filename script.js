// let titles=document.getElementById("title");
// let bt=document.getElementById("btn");
// bt.addEventListener("mousedown",function(){
//      title.textContent="pressed success!!"
//  });


// let titles=document.getElementById("title");
// let bt=document.getElementById("btn");
// bt.addEventListener("mouseup",function(){
//      title.textContent="Mouse released!!"
//  });


// let titles=document.getElementById("title");
// let bt=document.getElementById("btn");
// bt.addEventListener("mouseover",function(){
//      title.textContent="mouse over!!"
//  });

// let titles=document.getElementById("title");
// let bt=document.getElementById("btn");
// bt.addEventListener("mouseout",function(){
//      title.textContent="mouseout!!"
//  });


// let titles=document.getElementById("title");
// let bt=document.getElementById("btn");
// bt.addEventListener("mouseenter",function(){
//      title.textContent="mouse enter!!"
//  });


// let titles=document.getElementById("title");
// let bt=document.getElementById("btn");
// bt.addEventListener("mouseleave",function(){
//      title.textContent="mouse leave!!"
//  });


// let titles=document.getElementById("title");
// let bt=document.getElementById("btn");
// bt.addEventListener("mousemove",function(){
//      title.textContent="mouse move!"
//  });



// let titles=document.getElementById("title");
// let bt=document.getElementById("btn");
// bt.addEventListener("mousedown",function(){
//      title.textContent="pressed success!!"
//  });


// let name = document.getElementById("name");

// name.addEventListener("keydown", function() {
//     console.log("key pressed")
// });


// let name=document.getElementById("name");
// name.addEventListener("keyup",function(){
//     console.log("key uppp!!")
// })


// let x=document.getElementById("name");
// let y=document.getElementById("output");
// x.addEventListener("input",function(){
//     y.textContent="welcome to this js class"
    
// });


// let x=document.getElementById("name");
// let y=document.getElementById("output");
// x.addEventListener("change",function(){
//     y.textContent="input is changed"
    
// });


// let form = document.getElementById("myForm");
// let output = document.getElementById("output");

// form.addEventListener("submit", function() {
//     output.textContent = "Form submitted";
// });


// let form=document.getElementById("name");
// let output=document.getElementById("output");
// form.addEventListener("focus",function(){
//     output.textContent="focused"
// })


// let form=document.getElementById("name");
// let output=document.getElementById("output");
// form.addEventListener("blur",function(){
//     output.textContent="input lost focused!!"
// })

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function(event) {
//     console.log(event);
// });
// let btn=document.getElementById("btn")
//  btn.addEventListener("click", function(event) {
//     console.log(event.target);
// });

// let btn=document.getElementById("btn")
//  btn.addEventListener("click", function(event) {
//     console.log(event.type);
// });

// let input = document.getElementById("name");

// input.addEventListener("keydown", function(event) {
//     console.log(event.key);
// });

// document.addEventListener("click", function(event) {
//     console.log(event.clientX);
//     console.log(event.clientY);
// });

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form submitted");
});