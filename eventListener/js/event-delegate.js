// this is the number one system for removing child item by using their className ans parentNode Id using removeChild() function line number = 6,7
const items = document.getElementsByClassName("item");
for (let item of items) {
  item.addEventListener("click", function (event) {
    // added event parameter for controling event functionality and than we catch parentNodes by using getElementById and than removeChild this functionality will be inside the for...of lopp and execute one by one
    // const parentNode = document.getElementById("item-container");
    // parentNode.removeChild(item);
    /* so first of all we target elements than we hunt parentNode cause all li inside of ul parentNode than we removeChild  */
    event.target.parentNode.removeChild(event.target);
  });
}

// we can create a new li item inside ul by using createElement and than declared a varible with parentid than append our created li in out parent node ,it will be added but we cant not remove the new added item from the ul fixed this is called delegate
const addButton = document.getElementById("add-item");
addButton.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "Brand New Item";
  li.setAttribute("class", "item"); // we set an attribute class which name is item and than call the removeChild functionality for of loop
  const parent = document.getElementById("item-container");
  parent.appendChild(li);
  /////// now we can use bubble event theory and add event listener with parent node and we delegate event handler from classname to parent Id and this is the proper system to delete new add item
  parent.addEventListener("click", (event) => {
    // we catch paren nodes by using id and doing event bubble theory to delegate the event on whole ul inside the li
    event.target.parentNode.removeChild(event.target);
  });

  //for (let item of items) {
  //item.addEventListener("click", function (event) {
  // added event parameter for controling event functionality and than we catch parentNodes by using getElementById and than removeChild this functionality will be inside the for...of lopp and execute one by one
  // const parentNode = document.getElementById("item-container");
  // parentNode.removeChild(item);
  /* so first of all we target elements than we hunt parentNode cause all li inside of ul parentNode than we removeChild  */
  //event.target.parentNode.removeChild(event.target);   /// this is not the proper system to delete new add item but we can do it
  //});
  //}
});
