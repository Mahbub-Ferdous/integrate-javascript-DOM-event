/// when we use querySelector() == for complex selector finding we use querySelector
/// in there we directly write css selector == class, id
///

const query = document.querySelector(".lol");  // if we use querySelector only than we can manupulate only one css selector 
for (const blog of query) {
  blog.style.backgroundColor = "red";
}
