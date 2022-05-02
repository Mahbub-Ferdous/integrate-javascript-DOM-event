// post button interact and we use eventListener
document.getElementById("post-button").addEventListener("click", function () {
  //we pic by id textarea
  const commentText = document.getElementById("comment");
  // creat a new parahgraph
  const newComment = document.createElement("p");
  // we change newComment by using textarea text value
  newComment.innerText = commentText.value;
  // to clear once we write input text
  commentText.value = "";
  //append newcomment inside parent nodes container
  const commentContainer = document.getElementById("container");
  commentContainer.appendChild(newComment);
});
