/// how to setup js with html???

/* its similar like add css you can write internal js by using script tag in last of body tag and you can write javascript as an external file than you can concate with html using link tag like css */

/// what is DOM??

/// to access all html elements/tags by using javascript objects that is called DOM.
/* 
DOM means Document objects model where,
D = doccument means all html elements or tags 
O = objects that means js always understand everything with object and all the documents means html tag/elements are reserve with an objects 
M = model this cycle called method 
*/

/* DOM = [
    {head: 'meta', 'link', 'title'},
    {body: 'header', 'main', 'section', 'article'}

]*/
/* 
let DOM(document) = ['head', 'body', 'main', 'section', 'h3', 'p',];
*/
// if we want to apply any method with js for DOM its will be object method

/* 
if we need to see document:
console.log(document);
if we need to see spacific elements : like body-
console.log(document.body);
if i can change any elements value just like objects :

document.title = 'DOM Intro';
console.log(document.title);


*/

//// like some DOM querie:


/// getElementById == to getting any elements by using id name like = document.getElementById('IdName') cause it is string always

/* console.log(document.getElementsByClassName("second-title")); */

/// getElementsByClassName == to access any html elements by using class name like = document.getElementsByClassName('ClassName') it is also string

/* console.log(document.getElementsByClassName("blogs")); */

// getElementsByName 

// getElementsByTagName == to access any html elements by using html tag name, like = document.getElementsByTagName('TagName') this is also string

/* console.log(document.getElementsByTagName("h3")); */

// getElementsByTagNameNS



/* 
1. when we use getElemetsByTagName when we need a indivisual html
2. when we nee single things to do we use getElementById to ensure indivisuality
3. when we need one or more we call getElementsByClassName
*/


//// when we find using querySelectorAll() than we do not find html elements we find node list 

/*  
what is that DOM node list or node = Dom look like tree data structure and one elements binding with another and thats called node and different different node have different value 

*/

// this Dom output is not an array cause we cant change or push or pop any item but we can get length and index wise output
// we can acces also getAttribute and setattribute 
// variableName.getAttribute('id or className'); we find the attribute name 
// and also set an extra html attribute 

/// we can also acces parentNode and childNode if we need to know