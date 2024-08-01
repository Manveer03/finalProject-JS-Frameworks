// Front-End JavaScript Code File:

/*
Using DOM to get a reference to the two buttons based on their IDs
To access "EventListener()" method and attach "click" event to them:
*/
const getFetchBtn = document.getElementById("getFetch");
const getAsyncBtn = document.getElementById("getAsync");

/*
To recap:
AddEventListener required arguments:
- The event type
- Callback function
*/
getFetchBtn.addEventListener('click', getDataFetch);
getAsyncBtn.addEventListener('click', getDataAsync);

const apiURL = 'http://localhost:3000/api/destinations';

function getDataFetch() {
    // Get the input value
    const category = document.getElementById('text').value;
    // Make sure category is not empty
    if (!category) {
        alert("Please enter a category.");
        return;
    }

    // Fetch data
    fetch(`${apiURL}?category=${category}`)
        .then((response) => response.json())
        .then((data) => {
            displayData(data);
        });
};

async function getDataAsync() {
    // Get the input value
    const category = document.getElementById('text').value;
    // Make sure category is not empty
    if (!category) {
        alert("Please enter a category.");
        return;
    }

    // Fetch data
    const response = await fetch(`${apiURL}?category=${category}`);
    const data = await response.json();
    displayData(data);
}

function displayData(data) {
    let ulContent = "<ul>";
    data.forEach((element) => {
        ulContent += `<li>${element.name}, ${element.country} - ${element.description}</li>`;
    });
    ulContent += "</ul>";
    document.getElementById("data").innerHTML = ulContent;
}
