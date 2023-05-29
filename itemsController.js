// Create a ItemsController class
function addItem() {
    var nameInput = document.getElementById("name");
    var descriptionInput = document.getElementById("description");
    
    var name = nameInput.value;
    var description = descriptionInput.value;
    
    var itemList = document.getElementById("itemList");
    var listItem = document.createElement("li");
    
    listItem.textContent = name + " - " + description;
    
    itemList.appendChild(listItem);
    
    nameInput.value = "";
    descriptionInput.value = "";
}