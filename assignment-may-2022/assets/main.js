// this js adds a list item saying name of person was here on date


function printValues() {
    // gets the values the user has entered in the inputs
    const name = document.querySelector('[data-name]').value
    const date = document.querySelector('[data-date]').value
    // finds the list and creates a list element
    const ul = document.querySelector('[data-output]')
    const li = document.createElement('li')
    // assign class to list items so css styling applies
    li.classList.add('list-items');
    // list item will contain texting saying "(name entered) was here on (date entered)"
    li.textContent = name + ' was here on ' + date
    // adds the list item to the unordered list
    ul.appendChild(li)
    // clear inputs
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
}





