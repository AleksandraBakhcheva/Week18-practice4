let myNotes = document.createElement("form");
myNotes.innerHTML += `<h1>Мои заметки / важные дела</h1>
<input class="note" type="text" placeholder="Добавить заметку или важное дело" />
<button type="submit">Добавить</button>
<div class="result"></div>`;
document.body.append(myNotes);

document.addEventListener("DOMContentLoaded", function(event) {
    let myNotes = JSON.parse(localStorage.getItem("note"));
    if (myNotes !== null) {
        document.querySelector(".result").append(myNotes);
    }
});

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    showNote();
});

let notes = [];

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