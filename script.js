
const selectElement1 = document.getElementById("location");
const selectElement2 = document.getElementById("type");
const selectElement3 = document.getElementById("price");
const icon = document.getElementById("myIcon");

let allSelected = false;

// Add event listeners to each select element:
selectElement1.addEventListener("change", checkSelection);
selectElement2.addEventListener("change", checkSelection);
selectElement3.addEventListener("change", checkSelection);

function checkSelection() {
    allSelected = selectElement1.value !== "" && selectElement2.value !== "" && selectElement3.value !== "";
    icon.disabled = !allSelected;
}

icon.addEventListener("click", () => {
    if (allSelected) {
        // Get the selected values:
        const selectedValue1 = selectElement1.value;
        const selectedValue2 = selectElement2.value;
        const selectedValue3 = selectElement3.value;

        // Determine the target page based on the selected values:
        // (Implement your logic here to combine the values and determine the target page)
        const targetPage = createTargetPage(selectedValue1, selectedValue2, selectedValue3);

        // Redirect to the target page:
        window.location.href = "./buying-open.html";
    }
});

// Example function to create the target page URL based on selected values:
function createTargetPage(value1, value2, value3) {
    return `/page/${value1}-${value2}-${value3}`; // Example format, adjust as needed
}

let button = document.querySelector('#search-btn');
let log = document.querySelector('#log');
let sig = document.querySelector('#sig');
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('email')) {
        log.style.display = "none";
        sig.style.display = "none";
    } else {
        log.style.display = "inline-block";
        sig.style.display = "inline-block";
    }
});

button.addEventListener("click", () => {
    let select = document.querySelector("#location");
    if (!select.value) {
        return alert("Please Input Your Required Search Data");
    }
});
window.addEventListener('blur', () => {
    localStorage.clear();
});

const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fas fa-xmark'
        : 'fas fa-bars'
}