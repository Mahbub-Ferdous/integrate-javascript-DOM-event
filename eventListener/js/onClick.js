// write a function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// getting an events by using id
const blue = document.getElementById("btn-blue");
blue.onclick = makeBlue; // we call our blue function just set the name of function
// make a function for blue
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// handle events by using anonymus function  :

const greenBtn = document.getElementById("btn-green"); // we write directly on function in  a variable
// console.log(greenBtn);   /// please always check by using console.log
// this is called anonymus function :
greenBtn.onclick = function () {
  /// we do not use the name of function if we do not use this function again
  document.body.style.backgroundColor = "green";
};

// handle event by using addEventListener

let orange = document.getElementById("btn-orange");
orange.addEventListener("click", orange);
function orange() {
  document.body.style.backgroundColor = "orange";
}

// click me button evants with bubble evants
// bubble evants structure = document.getElementById('idName').addEventListener('type', listener, userCapture) where type is event type and listener is specific function and userCapture always false .
document.getElementById("click").addEventListener(
  "click",
  function () {
    alert("You click me yeah!!");
  },
  false
);
