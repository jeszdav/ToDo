const listDiv = document.querySelector(".list");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const listUl = listDiv.querySelector("ul");
const lis = listUl.children;

/**
 * Creates the buttons
 */
function attachListItemButtons(li) {
  let up = document.createElement("button");
  up.className = "up";
  up.textContent = "Up";
  li.appendChild(up);

  let down = document.createElement("button");
  down.className = "down";
  down.textContent = "Down";
  li.appendChild(down);

  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "Remove";
  li.appendChild(remove);
}

/**
 * For loop that creates the existing buttons
 */
for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

/**
 * Remove & moving button functions
 */
listUl.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    if (event.target.className == "remove") {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == "up") {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == "down") {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});

/**
 * Creates a new list item
 */
addItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  li.className = "list-group-item bg-info";
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = "";
});
