// we can change every thing by using js, now we can acces getelementsByClassName and change css there have class name blog in 4 places so we can iterate with loop and style this
const art = document.getElementsByClassName("blog");
for (const blog of art) {
  blog.style.border = "3px solid orange";
  blog.style.borderRadius = "1rem";
  blog.style.padding = "0.5rem";
  blog.style.margin = "1rem";
}
