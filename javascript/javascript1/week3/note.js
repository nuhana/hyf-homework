const notes = [];
function saveNote(content, id) {
  notes.push({ content, id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

function getNote(id) {
  // your code here

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      return notes[i];
    }
  }
  return console.error("note not found!");
}
const firstNote = getNote(3);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  for (let x = 0; x < notes.length; x++) {
    console.log(
      "the note with id" +
        " " +
        notes[x].id +
        " " +
        ", has the following note text :" +
        " " +
        notes[x].content
    );
  }
}
// The note with id: 1, has the following note text: Pick up groceries
logOutNotesFormatted();
