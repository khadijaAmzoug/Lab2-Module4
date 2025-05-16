let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
}

function removeLastItem() {
  shoppingList.pop();
  displayList(); 
}


function displayList() {
  const listDisplay = document.getElementById("listDisplay");
  listDisplay.innerHTML = ""; 

 
  for (let i = 0; i < shoppingList.length; i++) {
    const li = document.createElement("li");
    li.textContent = shoppingList[i];
    listDisplay.appendChild(li);
  }
}

function addItemFromInput() {
  const input = document.getElementById("itemInput");
  const newItem = input.value.trim(); 

  if (newItem !== "") {
    addItem(newItem);     
    input.value = "";     
  }
}