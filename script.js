let btn = document.querySelector("#addBtn");
let ul = document.querySelector("ul");
let inp = document.querySelector("#taskInput");

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerText = inp.value;

  // Create Delete Button
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  // Append delete button to list item
  item.appendChild(delBtn);
  ul.appendChild(item);

  inp.value = ""; // Clear input
});

// Delete task when delete button clicked
ul.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    let li = event.target.parentElement;
    li.remove();
  }
});