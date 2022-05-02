// what is bubble evant??
/* 
its the methodology to same as  fish bubble up down to up ..
when we write one and more event handler in one and more parentNodes and child nodes he triger first the lowest child nodes than his parennodes than his parent nodes and this process will bve called bubble evant 
*/

// thired li event handler
document.getElementById("thired").addEventListener("click", function () {
  console.log("this is thired li"); // if we click 3rd li than out put is this
});
// parenNodes ul event handler
document
  .getElementById("list-container")
  .addEventListener("click", function () {
    console.log("this is li's parentnodes ul"); // now all li will click than ouput will this but when we click 3rd li it will output 2 thing one is for thired and one is for ul
  });
// parentnodes of ul
document.getElementById("section").addEventListener("click", function () {
  console.log("this is all parentnodes section");   // all li 1st print ul events than print all parent section events but only thired will print 1st his events than uls events than section events and this is call bubble events capturing down to up like bubble in water 
});
