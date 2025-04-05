

// for this API to work the search term must be in lowercase during the fetch process           <><><>
// verify searchTerm has been linked with a vailid DOM object                                   <><><>
// verify that the input field is not empty                                                     <><><>
// create varibles with the values needed to promtp an api fetch
// if return satus is okay the data will be parsed into a json format
// inform user of no matches found       
// loop through ther data, for each result create an image and add it to my display area
// remember literal strings `----${string}----`
// keep track or progress with  "console.log(msgText);"

// learn to force all lower case

/* 
Element Ids
-   userSearchTerm
-   displayImageHere
-   pokemonName
-   pokemonNumber
-   gender
-   category
-   type
-   weaknesses
*/

// api url      `https://pokeapi.co/api/v2/pokemon/${searchedTerm}`

function searchPokedex()
{
  //create variabels needed

    let userSearch = document.getElementById('userSearchTerm');
    let searchedTerm = userSearch.value.toLowerCase();
    let pokeImage = document.getElementById('displayImageHere');
    let pokeName = document.getElementById('pokemonName');
    let pokeNumber = document.getElementById('pokemonNumber');
    let pokeGender = document.getElementById('gender');
    let pokeCat = document.getElementById('category');
    let pokeType = document.getElementById('type');
    let pokeWeak = document.getElementById('weaknesses');
    let msgText = 'search button is working';

    console.log(msgText);

 // verify searchTerm has been linked with a valid DOM object
 // verify user has input a serach term
    if ((userSearch == null) || (userSearch == undefined))
    {
        msgText = 'Search element not defined';
        console.log(msgText);
    }
    if (userSearch.value.trim().length == 0)
    {
        msgText = 'Input the name of a Pokemon you would like to learn about then click "Search"';
        console.log(msgText);
        pokeNumber.innerHTML = msgText;
    }


 // verify all avribles have been linked with divs
    if ((pokeImage == null) || (pokeImage == undefined))
    {
        msgText = 'Search element not defined';
        console.log(msgText);
    }
    if ((pokeName == null) || (pokeName == undefined))
    {
        msgText = 'Name can not be linked with display div';
        console.log(msgText);
    }
    if ((pokeNumber == null) || (pokeNumber == undefined))
    {
        msgText = 'Number can not be linked with display div';
        console.log(msgText);
    }

    msgText = userSearch.value;
    console.log(msgText);
    msgText = 'looking for ' + searchedTerm;
    console.log(msgText);

 // create varible with user input 
    const api_url = `https://pokeapi.co/api/v2/pokemon/${searchedTerm}`;

    fetch(api_url)
        .then(response => 
            {
                if(!response.ok)
                {
                    msgText = 'Error fetching data from API';
                    pokeNumber.innerText = msgText;
                    console.log(msgText);
                    throw new Error('Failed fetching API')
                }
                return response.json();
            })
        .then(data => 
            {
                //confirm the data has been fetched and formatted
                //create reference source
                console.log(data);

               let pokeImageURL = data.sprites.front_default;
               pokeImage.innerHTML = `<img width='150' height='150' src='${pokeImageURL}'>`;
               pokeName.innerText = data.name;
               pokeNumber.innerText = data.id;


            })

}
/*
let userSearch = document.getElementById('userSearchTerm');
let searchedTerm = userSearch.value.toLowerCase();
let pokeImage = document.getElementById('displayImageHere');
let pokeName = document.getElementById('pokemonName');
let pokeNumber = document.getElementById('pokemonNumber');
let pokeGender = document.getElementById('gender');
let pokeCat = document.getElementById('category');
let pokeType = document.getElementById('type');
let pokeWeak = document.getElementById('weaknesses');
let msgText = 'search button is working';
*/