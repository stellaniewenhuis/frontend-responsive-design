/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

function changeText() {
    if (this.innerText == "Toevoegen") {
        this.innerText = "Toegevoegd";
    } else {
        this.innerText = "Toevoegen";
    }
}


var button = document.querySelector('#change_text_button');
if (button) {
    button.addEventListener("click", changeText);
}



