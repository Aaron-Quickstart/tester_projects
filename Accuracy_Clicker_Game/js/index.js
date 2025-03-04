function makeSquare()
{
    // generate cordinates and pick a color
    let x = Math.floor(Math.random()*6);
    let y = Math.floor(Math.random()*6);
    let z = Math.floor(Math.random()*6);
    let colors = ['Red', 'Red', 'Red', 'Red', 'Yellow', 'Green', 'Blue'];
    let color1 = colors[z];

    //console.log(x);
    //console.log(y);
   // console.log(color1);

    // color selected cell and listen for click
    let coords = document.querySelectorAll('#game_table td')
    let paintedCoord = x *5 + y;
    console.log(coords);
    console.log(paintedCoord);
    if (z <= 3)
    {
        coords[paintedCoord].classList.add('target');
     }
    else if (z === 4)
    {
        coords[paintedCoord].classList.add('yellowSquare');
    }
    else if (z === 5)
    {
        coords[paintedCoord].classList.add('greenSquare');
    }
    else if (z === 6)
    {
        coords[paintedCoord].classList.add('blueSquare');
    }

    
    return { x , y}
}
    
function clickListen()
{
    let table = document.getElementById('game_table');
    let currentTarget = null;
    let score = document.getElementById('score_box');
    let points = 0;
    table.addEventListener('click', function(event) 
    {
        let clickedCell = event.target;
        if (clickedCell.classList.contains('target')) 
        {
            points = points + 125;
            score.innerText = points;
            currentTarget = makeSquare();
        }
    })
}
function startGame()
{
    makeSquare();
}