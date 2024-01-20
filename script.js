// script.js

// Function to open the navigation menu
function openNav() {
    document.getElementById("menu").style.display = "flex";
}

// Function to close the navigation menu
function closeNav() {
    document.getElementById("menu").style.display = "none";
}

// Function to handle mouseover event
function hover(element) {
    element.style.color = "#FFD700"; // Change color as needed
}

// Function to handle mouseout event
function noHover(element) {
    element.style.color = "#fff"; // Change color as needed
}

// Function to handle click on Home link
function myHome(element) {
    // Add your custom logic for Home click
    console.log("Home clicked");
}

// Function to handle click on About link
function myAbout(element) {
    // Add your custom logic for About click
    console.log("About clicked");
}

// Function to handle click on Services link
function myServices(element) {
    // Add your custom logic for Services click
    console.log("Services clicked");
}

// Function to handle click on Contact link
function myContact(element) {
    // Add your custom logic for Contact click
    console.log("Contact clicked");
}

// Function to handle mouseover event on email link
function mailOver(element) {
    element.style.color = "#008000"; // Change color as needed
}

// Function to handle mouseout event on email link
function mailOut(element) {
    element.style.color = "#000"; // Change color as needed
}
