/* 
// github delete repository button type delete button
1. first of all we write event listener click to hide our h3 information by using css display: none; property.
2. than we learn two another events for input field which are : 1.focus and 2.blur 
3. than we learn 3 another events for keyboard events which are - keydown, keypress,keyup 
but mostly we use keyup cause this events print proper info in console what we input in input field keypress and keydown are not proper for printing proper info in console
4. we can use anothe events which name is change that will be output propely in realtime 
5. we write conditions if you write delete in our input field than del-btn will be active like we use removeAttribute disabled and than we use change events one thing in keyup events function we pass a parameter name events which is catch all elements 
*/

// click with delete or hide any item by using delete button
document.getElementById("del-btn").addEventListener("click", function () {
  const removeInfo = document.getElementById("secret-info");
  removeInfo.style.display = "none"; /// simply we hide h3 than we use css display = none property
});
// focus
document
  .getElementById("delete-confirm")
  .addEventListener("focus", function () {
    document.body.style.backgroundColor = "lightcoral";
  }); // when we click the input field it will be focus and than the full html body color will be change and turn into lightcoral color
// blur
document.getElementById("delete-confirm").addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
}); // when we click outside the input field but any point of html body than input field will no in focus so it is called blur and when it will blur the whole body background color will be turn into white
/* // keydown events:
document
  .getElementById("delete-confirm")
  .addEventListener("keydown", function () {
    const deleteInput = document.getElementById("delete-confirm");
    console.log(deleteInput.value);
  }); */
/* // keypress events:
document
  .getElementById("delete-confirm")
  .addEventListener("keypress", function () {
    const deleteInput = document.getElementById("delete-confirm");
    console.log(deleteInput.value);
  }); */
// keypup events:
document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    /// add a event parameter to catch all types of event functionality and event element value
    const deleteBtn = document.getElementById("del-btn");
    if (event.target.value == "delete" || event.target.value == "Delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", "true");
    }
  }); /// when we write delete properly the delete button turn disabled to active so we use
// change events:
document
  .getElementById("delete-confirm")
  .addEventListener("change", function () {
    const deleteInput = document.getElementById("delete-confirm");
    console.log(deleteInput.value);
  }); /// when we blur this input field than the changing will be change
