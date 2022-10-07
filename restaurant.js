/*   Module needs to import the function defined in the fishmonger module, 
    using "require()" function.
    "restaurant.js" will use the array passed from "fishmonger.js" as a 
    parameter for the function "fishMenu".
    "fishMenu" will create an array representing what the restaurant will
    have in their inventory after buying fish from the boat.
*/


const { mongerInventory, alteredArray} = require("./fishMonger")
const { boatInventory, initialArray } = require("./fishingBoat")
//console.log(alteredArray)
const chefBudget = 5.00
let chefFishArray = []
let fishStringArray = []
let fullMenuString = ''
const fishMenu = () => {
    for (fish of alteredArray) {
        fish.amount /= 2
        if (fish.price <= chefBudget){
            chefFishArray.push(fish)
            fishStringArray = [`${fish.species} Soup`, `${fish.species} Sandwich`, `Grilled ${fish.species}`]
            //console.log (fishStringArray)
            //for (fish of chefFishArray) {
               let fishStringBefore = `<h1>Menu</h1>\n<article class="menu">\n  <h2>${fish.species}</h2>\n  <section class="menu__item">`
               //fishStringArray.join(`</section>\n  <section class="menu__item">`)
               let fishStringAfter = `</section>\n</article>\n\n`
              let menuString = fishStringBefore + fishStringArray.join(`</section>\n  <section class="menu__item">`) + fishStringAfter
               fullMenuString += menuString
           //console.log(menuString)
               //}
        }
    }
    // console.log(chefFishArray) 
    

     return fullMenuString
}

//let test = mongerInventory(initialArray)
//let menuArray = fishMenu()

module.exports = { fishMenu }


/* for each object in chefFishArray:
    1. create array of 3 menu items
    2. create */