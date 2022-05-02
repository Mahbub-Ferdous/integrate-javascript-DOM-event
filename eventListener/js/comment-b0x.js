// add another article by using js
/* const add = document.createElement("article");
add.setAttribute("class", "heading");
add.innerHTML = `
    <h3>Ashik Mahmud Sohan</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corrupti labore sint corporis laborum eaque aspernatur explicabo nihil quis, amet, esse unde eius, id dicta tempore. Fugit dolore provident quaerat.</p>
`;
const article = document.getElementById("main");
article.appendChild(add); */
/// style heading class by using js:

const heading = document.getElementsByClassName("heading");
for (const head of heading) {
  head.style.backgroundColor = "lightblue";
  head.style.padding = "1rem";
  head.style.borderRadius = "1rem";
  head.style.margin = "1rem";
  
}

// button interaction:

document.getElementById("btn-post").addEventListener("click", function () {
  const name = document.getElementById("nameInput");
  const newName = document.createElement("h3");
  newName.innerText = name.value;
  name.value = "";
  const comment = document.getElementById("comment");
  const newComment = document.createElement("p");
  newComment.innerText = comment.value;
  comment.value = "";
  const newDiv = document.getElementById("inputArticle");
  newDiv.setAttribute("class", "heading");
  newDiv.appendChild(newName);
  newDiv.appendChild(newComment);
  const addDiv = document.getElementById("division");
  addDiv.appendChild(newDiv);

  /* // create new commnets
  const h3 = document.getElementById("name");
  h3.innerHTML = nameInput.value;
  nameInput.value = "";
  const p = document.getElementById("getComment");
  p.innerHTML = comment.value;
  comment.value = ""; */
});
