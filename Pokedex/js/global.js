

// for this API to work the search term must be in lowercase during the fetch process
// verify searchTerm has been linked with a vailid DOM object
// verify that the input field is not empty
// create varibles with the values needed to promtp an api fetch
// if return satus is okay the data will be parsed into a json format
// inform user of no matches found       
// loop through ther data, for each result create an image and add it to my display area


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

function whosThatPokemon()
{
  //create variabels needed

    let userSearch = document.getElementById('userSearchTerm'.toLowerCase());
    let pokeImage = document.GetElementById('displayImageHere');
    let pokeName = document.getElementById('pokemonName');
    let pokeNumber = document.getElementById('pokemonNumber');
    let pokeGender = document.getElementById('gender');
    let pokeCat = document.getElementById('category');
    let pokeType = document.getElementById('type');
    let pokeWeak = document.getElementById('weaknesses');
    let msgText = 'search button is working';

    console.log(msgText);
    
 // verify searchTerm has been linked with a vailid DOM object
    if ((userSearch == null) || (userSearch == undefined))
    {
        
    }





}