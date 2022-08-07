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