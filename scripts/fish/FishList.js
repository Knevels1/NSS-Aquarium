import {Fish} from "./fish.js"


import { mostHolyFish, soldierFish, regularFish } from "./FishDataProvider.js"


const buildFishContainerHTML = (arrayOfFish) => {
  
  let fishHTMLRepresentations = ""
  for (const fish of arrayOfFish) {
    fishHTMLRepresentations += Fish(fish)
 }
 return fishHTMLRepresentations

}

export const FishList = () => {
  const contentElement = document.querySelector(".contentContainer__left")
  //building html for holyFish
  const holyFish = mostHolyFish()
  //console.log(holyFish)
  
  const holyFishHTML = buildFishContainerHTML(holyFish)
  //console.log(holyFishHTML)

  //html for soldierFish
  const soldiersFish = soldierFish()
  const soldierFishHTML = buildFishContainerHTML(soldiersFish)

  //html for regularFish
  const regularFishes = regularFish()
  const regularFishHTML = buildFishContainerHTML(regularFishes)


//debugger




contentElement.innerHTML += `
  <section class="fishList">
  <h2>Fish List</h2>
  <div class="fishContainer">
     ${holyFishHTML} 
     ${soldierFishHTML}
     ${regularFishHTML}                   
  </div>
  </section>
  `
}