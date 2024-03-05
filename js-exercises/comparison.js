// product 1 data

const PRODUCT_1_NAME = "Tablet Space Y" 
const PRODUCT_1_PRICE = 1000       // USD
const PRODUCT_1_DIAGONAL = 5.2     // inch
const PRODUCT_1_RAM = 4            // GB
const PRODUCT_1_STORAGE = 64     // GB


// product 2 data

const PRODUCT_2_NAME = "Tablet Aero Y" 
const PRODUCT_2_PRICE = 900         // USD
const PRODUCT_2_DIAGONAL = 4.9      // inch
const PRODUCT_2_RAM = 6             // GB
const PRODUCT_2_STORAGE = 32        // GB
// GB

// COMPARISON
// <, <=, >, >=, ==, !=, ===, !==


let firstProdStorageBigger = PRODUCT_1_STORAGE > PRODUCT_2_STORAGE 
let isProdRamSame = PRODUCT_1_RAM < PRODUCT_2_RAM
let firstProdScreenBigger = PRODUCT_2_DIAGONAL < PRODUCT_1_DIAGONAL
let firstProdCheaper = PRODUCT_1_PRICE < PRODUCT_2_PRICE
// alert("Firts tablet has bigger screen?\n" + firstProdScreenBigger);
// alert("Firts tablet is cheaper?\n" + firstProdCheaper);

// result.innerHTML = "Hello!" 
let screenCompareOut = "no"
let priceCompareOut = "no"
let prodRamCompareOut = "yes"
let prodStorageCompareOut = "no"
if(firstProdScreenBigger){

    screenCompareOut = "yes"
}
if (firstProdCheaper) {
  priceCompareOut = "yes"
}
if (isProdRamSame) {
  prodRamCompareOut = "no"
}
if (firstProdStorageBigger) {
  prodStorageCompareOut = "yes"
}


question1.innerHTML = "Does firts tablet have a bigger screen?" 
answer1.innerHTML = screenCompareOut 
question2.innerHTML = "Is the firts tablet cheaper?" 
answer2.innerHTML =  priceCompareOut 
question3.innerHTML = "Do both tablets have the same RAM?" 
answer3.innerHTML = prodRamCompareOut 
question4.innerHTML = "Does the first tablet have more storage?"
answer4.innerHTML = prodStorageCompareOut; 
