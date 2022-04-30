/// when we use querySelector() == for complex selector finding we use querySelector
/// in there we directly write css selector == class, id
///

const query = document.querySelectorAll("#second-article p"); //// if we can use selector parent and manupulate his child selctor than use querySelectorAll
query.style.backgroundColor = "red";
