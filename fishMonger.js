/*  Module needs to import the function defined in the fishing boat module, 
    using "require()" function.
    "fishMonger.js" will use the array passed from "fishingBoat.js" as a 
    parameter for the function "mongerInventory".
    "mongerInventory" will create an array representing what the fishmonger will
    have in their inventory after buying fish from the boat.
    */

const { boatInventory } = require("./fishingBoat")
//const { chefBudget } = require("./restaurant")
// console.log(initialArray)
// temporarily declared here for testing

const chefBudget = 5.00
let mongerArray = []

const mongerInventory = (initialArray) => {
    
    for (fish of initialArray) {
        if (fish.price <= chefBudget && fish.price <= 7.50 && fish.amount >= 10) {
        mongerArray.push(fish)
        fish.amount = 10
        }
    }
    return mongerArray
}

let alteredArray = mongerInventory(boatInventory())
 //console.log(alteredArray)

module.exports = { mongerInventory, alteredArray }