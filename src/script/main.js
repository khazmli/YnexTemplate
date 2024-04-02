const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const dropdownBtn2 = document.getElementById("btn-2");
const dropdownMenu2 = document.getElementById("dropdown-2");
const toggleArrow2 = document.getElementById("arrow-2");

const dropdownBtn3 = document.getElementById("btn-3");
const dropdownMenu3 = document.getElementById("dropdown-3");
const toggleArrow3 = document.getElementById("arrow-3");

const dropdownBtn4 = document.getElementById("btn-4");
const dropdownMenu4 = document.getElementById("dropdown-4");
const toggleArrow4 = document.getElementById("arrow-4");

const dropdownBtn5 = document.getElementById("btn-5");
const dropdownMenu5 = document.getElementById("dropdown-5");
const toggleArrow5 = document.getElementById("arrow-5");

const dropdownBtn6 = document.getElementById("btn-6");
const dropdownMenu6 = document.getElementById("dropdown-6");
const toggleArrow6 = document.getElementById("arrow-6");

const dropdownBtn7 = document.getElementById("btn-7");
const dropdownMenu7 = document.getElementById("dropdown-7");
const toggleArrow7 = document.getElementById("arrow-7");

const container1 = document.querySelector(".container")
const container2 = document.querySelector(".container-2")
const container3 = document.querySelector(".container-3")
const container4 = document.querySelector(".container-4")
const container5 = document.querySelector(".container-5")
const container6 = document.querySelector(".container-6")
const container7 = document.querySelector(".container-7")



runToEvent()

function runToEvent() {
    dropdownBtn.addEventListener("click", toggleDropdown);
    dropdownBtn2.addEventListener("click", toggleDropdown2);
    dropdownBtn3.addEventListener("click", toggleDropdown3);
    dropdownBtn4.addEventListener("click", toggleDropdown4);
    dropdownBtn5.addEventListener("click", toggleDropdown5);
    dropdownBtn6.addEventListener("click", toggleDropdown6);
    dropdownBtn7.addEventListener("click", toggleDropdown7);
}

function toggleDropdown(e) {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
    if (e.target) {

        container1.classList.toggle("top")
    }
}
function toggleDropdown2(e) {
    dropdownMenu2.classList.toggle("show-2");
    toggleArrow2.classList.toggle("arrow-2");
    if (e.target) {

        container2.classList.toggle("top2")
    }
}
function toggleDropdown3(e) {
    dropdownMenu3.classList.toggle("show-3");
    toggleArrow3.classList.toggle("arrow-3");
    if (e.target) {
        container3.classList.toggle("top3")
    }
}

function toggleDropdown4(e) {
    dropdownMenu4.classList.toggle("show-4");
    toggleArrow4.classList.toggle("arrow-4");
    if (e.target) {

        container4.classList.toggle("top4")
    }

}
function toggleDropdown5(e) {
    dropdownMenu5.classList.toggle("show-5");
    toggleArrow5.classList.toggle("arrow-5");
    if (e.target) {

        container5.classList.toggle("top5")
    }

}
function toggleDropdown6(e) {
    dropdownMenu6.classList.toggle("show-6");
    toggleArrow6.classList.toggle("arrow-6");
    if (e.target) {

        container6.classList.toggle("top6")
    }

}
function toggleDropdown7(e) {
    dropdownMenu7.classList.toggle("show-7");
    toggleArrow7.classList.toggle("arrow-7");
    if (e.target) {

        container7.classList.toggle("top7")
    }

}
