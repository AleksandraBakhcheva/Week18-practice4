let myNotes = document.createElement("form");
myNotes.innerHTML += `<h1>Мои заметки / важные дела</h1>
<input class="note" type="text" placeholder="Добавить заметку или важное дело" />
<button type="submit">Добавить</button>
<div class="result"></div>`;
document.body.append(myNotes);

let notes = [];

document.addEventListener("DOMContentLoaded", function(event) {
    let totalNotes = JSON.parse(localStorage.getItem("note"));
    notes = totalNotes;
    if (notes !== null) {
        for (let i = 0; i < notes.length; i++) {
            let unorderedList = document.createElement("ul");
            unorderedList.innerHTML += `<li>${notes[i]}</li>`;
            document.querySelector(".result").append(unorderedList);
    }}
});

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    showNote();
});

function showNote() {
    let note = document.querySelector(".note").value;
    if (note !== "") { 
        let unorderedList = document.createElement("ul");
        unorderedList.innerHTML += `<li>${note}</li>`;
        document.querySelector(".result").append(unorderedList);
        notes.push(note);
        localStorage.setItem("note", JSON.stringify(notes));
        document.querySelector(".note").value = "";
    }
    else {
        return 0;
    }
}