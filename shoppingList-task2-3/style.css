let shoppingList = [];

// Add item if not duplicate
function addItem(item) {
  const lowerItem = item.toLowerCase();
  const exists = shoppingList.some(existing => existing.toLowerCase() === lowerItem);

  if (!exists) {
    shoppingList.push(item);
  } else {
    alert("This item already exists!");
  }
}

// Add item from input field
function addItemFromInput() {
  const input = document.getElementById("itemInput");
  const newItem = input.value.trim();

  if (newItem !== "") {
    addItem(newItem);
    input.value = "";
    displayList(shoppingList);
  }
}

// Remove last item and update display
function removeLastItem() {
  if (shoppingList.length > 0) {
    shoppingList.pop();
    displayList(shoppingList);
  }
}

// Display the list in the UL element
function displayList(listToShow) {
  const listDisplay = document.getElementById("listDisplay");
  listDisplay.innerHTML = "";

  if (listToShow.length === 0) {
    const li = document.createElement("li");
    li.textContent = "The list is empty.";
    li.style.color = "gray";
    listDisplay.appendChild(li);
    return;
  }

  listToShow.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listDisplay.appendChild(li);
  });
}

// filter and display results
function filterItems() {
  const searchValue = document.getElementById("searchInput").value.trim();
  const filtered = shoppingList.filter(item =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );

  displayList(filtered);
}