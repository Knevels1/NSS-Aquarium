import {Fish} from "./fish.js"


import { useFish, mostHolyFish } from "./FishDataProvider.js"

export const FishList = () => {


const contentElement = document.querySelector(".contentContainer__left") 

//debugger

const fishes = useFish()

let fishHTMLRepresentations = ""
for (const fish of fishes) {
    fishHTMLRepresentations += Fish(fish)
}

contentElement.innerHTML += `
  <section class="fishList">
  <h2>Fish List</h2>
  <div class="fishContainer">
     ${fishHTMLRepresentations}                    
  </div>
  </section>
  `
}
