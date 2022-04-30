console.log(document);
console.log(document.body); /// document.body for access only body its maintain objects method
document.title = "DOM Intro";
console.log(document.title);
const blogs = document.getElementsByTagName("article");
for (const article of blogs) {
  console.log(article); // we can iterate all article tags
}
const blogTitles = document.getElementsByTagName("h3");
for (const h3 of blogTitles) {
  // we can also iterate any elements
  console.log(h3.innerText); // we can only queries h3 inner text
}
