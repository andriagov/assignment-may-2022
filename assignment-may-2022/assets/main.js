// this js adds a list item saying name of person was here on date


function printValues() {
    // assign values
    const name = document.querySelector('[data-name]').value
    const date = document.querySelector('[data-date]').value
    // add list item to ul element
    const ul = document.querySelector('[data-output]')
    const li = document.createElement('li')
    // assign class to list items 
    li.classList.add('list-items');
    // list item will contain texting saying "(name entered) was here on (date entered)"
    li.textContent = name + ' was here on ' + date
    // adds the list item to the unordered list
    ul.appendChild(li)
    // clear inputs
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
}





