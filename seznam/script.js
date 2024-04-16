let produktySeznamu = [];

function pridejDoSeznamu() {
    const Iseznam = document.getElementById("seznam").value;
    
    produktySeznamu.push({ name: Iseznam, purchased: false });
    
    updateSeznam();
    
    localStorage.setItem("produktySeznamu", JSON.stringify(produktySeznamu));
}

window.onload = function() {
    const storedItems = JSON.parse(localStorage.getItem("produktySeznamu"));
    
    if (storedItems) {
        produktySeznamu = storedItems;
        updateSeznam();
    }
}

function updateSeznam() {
    const seznamElement = document.getElementById("pepek");
    seznamElement.innerHTML = "";
    produktySeznamu.forEach(function(item, index) {
        const listItem = document.createElement("li");
        listItem.className = "list-item";
        listItem.innerHTML = '<input type="checkbox" id="checkbox_' + index + '" onclick="oznacJakoZakoupeno(' + index + ')" ' + (item.purchased ? 'checked' : '') + '>' +
                            '<label for="checkbox_' + index + '">' + item.name + '</label>' +
                            ' <button onclick="odstranZSeznamu(' + index + ')">Odstranit</button>';
        seznamElement.appendChild(listItem);
    });
}

function odstranZSeznamu(index) {
    produktySeznamu.splice(index, 1);
    updateSeznam();
    localStorage.setItem("produktySeznamu", JSON.stringify(produktySeznamu));
}

function oznacJakoZakoupeno(index) {
    produktySeznamu[index].purchased = !produktySeznamu[index].purchased;
    localStorage.setItem("produktySeznamu", JSON.stringify(produktySeznamu));
}
