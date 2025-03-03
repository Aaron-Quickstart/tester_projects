function gameFunction()
{


// generate number for x and y coordinates and color
let x = Math.floor(Math.random() * 6);
let y = Math.floor(Math.random() * 6);
let rolledColor = Math.floor(Math.random() * 2);


// apply color and place square inside of table

let cells = document.querySelectorAll("#game_field td");
cells.forEach(cell => cell.classList.remove('target'));
let coordinates = x * 6 + y;
cells[coordinates].classList.add('target')
return {x , y};













// check clicked square for color
// make squares dissappear
// update score
// update health
// game over message
}