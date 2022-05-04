// what is bubble evant??
/* 
its the methodology to same as  fish bubble up down to up ..
when we write one and more event handler in one and more parentNodes and child nodes he triger first the lowest child nodes than his parennodes than his parent nodes and this process will be called bubble event

/////// event bubble will happend when parentNodes and childNodes have some event handler like parentNodes have click handler and childnodes have also click handler
*/
// What is stop propagation ??
/* 
if we do not want to take bubble events and we need only one output like thired li than we pass a parameter named 'event' in this events function which we need and than event.stopPropagation()
*/

// thired li event handler
document.getElementById("thired").addEventListener("click", function (event) {
  // pass event to control events
  console.log("thired item clicked"); // if we click 3rd li than out put is this
  event.stopPropagation(); // now when you click thired li than output will only one which is li evants output not ul or section so we can stop bubble event by using stoppropagation() but if we have more events in thired li they will print so how can also stopo those
});
document.getElementById("thired").addEventListener("click", function (event) {
  // pass event to control events
  console.log("thired1 item clicked"); // if we click 3rd li than out put is this
  event.stopImmediatePropagation(); // we can stop one and more events in this by using stopImmediatePropagation so thired2 item clicked and thired3 item clicked will stop for using stopImmediatePropagation
});
document.getElementById("thired").addEventListener("click", function () {
  // pass event to control events
  console.log("thired2 item clicked"); // if we click 3rd li than out put is this
});
document.getElementById("thired").addEventListener("click", function () {
  // pass event to control events
  console.log("thired3 item clicked"); // if we click 3rd li than out put is this
});
// parenNodes ul event handler
document
  .getElementById("list-container")
  .addEventListener("click", function () {
    console.log("ul clicked"); // now all li will click than ouput will this but when we click 3rd li it will output 2 thing one is for thired and one is for ul
  });
// parentnodes of ul
document.getElementById("section").addEventListener("click", function () {
  console.log("section clicked"); // all li 1st print ul events than print all parent section events but only thired will print 1st his events than uls events than section events and this is call bubble events capturing down to up like bubble in water
});
