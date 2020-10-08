import {Tips} from "./Tip.js"

import {careTips} from "./TipDataProvider.js"

export const TipList = () => {
    
    const contentElement = document.querySelector(".contentContainer__right")

    const tips = careTips()

    let tipsHTMLRepresentations = ""
    for (const tip of tips) {
        tipsHTMLRepresentations += Tips(tip)
    }
contentElement.innerHTML += `
    <aside class="contentContainer__right">
    <h4>Care Tips</h4>
    <div class="Tips">
       ${tipsHTMLRepresentations}
    </div>
    </aside>




`

}