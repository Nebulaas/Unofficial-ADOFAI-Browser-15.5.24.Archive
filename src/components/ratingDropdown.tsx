// broken file, will fix when relevant


function ratingDropdown() {
    document.getElementById("systemDropdown").classList.toggle("show");

    // change dropdown arrow based on whether dropdown visible or not
    const dropdownCaret = document.getElementById("ratingDropdownArrow")
    if (dropdownCaret.classList.contains('fa-caret-down')) {
        dropdownCaret.classList.remove('fa-caret-down');
        dropdownCaret.classList.add('fa-caret-up');
    }
    else {
        dropdownCaret.classList.remove('fa-caret-up');
        dropdownCaret.classList.add('fa-caret-down');
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!e.target.matches('.dropbtn')) {
        const systemDropdown = document.getElementById("systemDropdown");

        // set dropdown arrow to closed
        const dropdownCaret = document.getElementById("ratingDropdownArrow")
        dropdownCaret.classList.remove('fa-caret-up');
        dropdownCaret.classList.add('fa-caret-down');

        // if dropdown currently visible, hide dropdown
        if (systemDropdown.classList.contains('show')) {
            systemDropdown.classList.remove('show');
        }
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!e.target.matches('.inactiveSystem')) {
        const target = e.target;

        if (target == document.getElementById("T21C-inactive")) {
            target.classList.remove('fa-caret-up');
            target.classList.add('fa-caret-down');
        }
        else {

        }
    }
}

// function changeRatingSystem() {
//
// }