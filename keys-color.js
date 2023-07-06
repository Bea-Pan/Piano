const keys = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4','C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5'];
const notes = [];

keys.forEach(function(key){
    notes.push(document.getElementById(key))
})

function keyColor(event){
    event.target.style.backgroundColor = 'pink'
}

function keyNoColor(event){
    event.target.style.backgroundColor = ''
}

let eventAssignmentFunction = (note) => {
    note.onmousedown = keyColor;
    note.onmouseup = keyNoColor;
  }

  notes.forEach(function(note){
    eventAssignmentFunction(note);
  })