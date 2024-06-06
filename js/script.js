var search_input = document.getElementById("search-input");
var clear_button = document.getElementById("search-clear-button");
var clear_button_separator = document.getElementById("clear-button-separator");

function showClearButton() {
    if (search_input.value) {
        clear_button.classList.add("show");
        clear_button_separator.classList.add("show");
    }
    else {
        hideClearButton()
    }
}

function hideClearButton() {
    clear_button.classList.remove("show");
    clear_button_separator.classList.remove("show");
}

function clearSearchInput() {
    search_input.value = "";
    hideClearButton();
}

function submitOnEnter(event) {
    let key_code = event.keyCode;
    let target = event.target;
    if (key_code == "13") {
        let form = target.closest("form");
        form.submit();
        event.preventDefault();
    }
}
